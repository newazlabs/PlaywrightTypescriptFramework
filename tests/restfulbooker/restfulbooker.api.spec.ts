// API tests — no browser involved. They use Playwright's `request` fixture
// (wired through the API client fixtures) and run in a few seconds.
import { test, expect } from '../../fixtures/restfulbooker/restfulbooker';
import { buildBooking } from '../../utils/dataFactory';

test.describe('Restful Booker API', () => {

    test('TS01 - health check responds', { tag: ['@api', '@smoke'] }, async ({ bookingApi }) => {
        const response = await bookingApi.ping();
        expect(response.status()).toBe(201);
    });

    test('TS02 - create and read a booking', { tag: ['@api', '@smoke'] }, async ({ bookingApi }) => {
        const booking = buildBooking();

        const createResponse = await bookingApi.createBooking(booking);
        expect(createResponse.ok()).toBeTruthy();
        const { bookingid } = await createResponse.json();
        expect(bookingid).toBeGreaterThan(0);

        const getResponse = await bookingApi.getBooking(bookingid);
        expect(getResponse.ok()).toBeTruthy();
        expect(await getResponse.json()).toMatchObject({
            firstname: booking.firstname,
            lastname:  booking.lastname,
            totalprice: booking.totalprice,
        });
    });

    test('TS03 - update and delete a booking with auth', { tag: ['@api', '@regression'] }, async ({ authApi, bookingApi }) => {
        const token = await authApi.createToken();
        const booking = buildBooking();

        const createResponse = await bookingApi.createBooking(booking);
        const { bookingid } = await createResponse.json();

        const updateResponse = await bookingApi.updateBooking(
            bookingid,
            { ...booking, additionalneeds: 'Late checkout' },
            token,
        );
        expect(updateResponse.ok()).toBeTruthy();
        expect((await updateResponse.json()).additionalneeds).toBe('Late checkout');

        const deleteResponse = await bookingApi.deleteBooking(bookingid, token);
        expect(deleteResponse.status()).toBe(201);

        const getResponse = await bookingApi.getBooking(bookingid);
        expect(getResponse.status()).toBe(404);
    });

});

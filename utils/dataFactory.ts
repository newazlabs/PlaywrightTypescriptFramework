// PURPOSE: Generates unique, realistic test data for every run using faker.
// Unique data matters once you test apps that persist records — two parallel
// runs with the same hardcoded "John Doe" can collide; faker data never does.
import { faker } from '@faker-js/faker';

// UI: checkout form data (saucedemo and any future shop portal)
export function buildCheckoutInfo() {
    return {
        firstName:  faker.person.firstName(),
        lastName:   faker.person.lastName(),
        postalCode: faker.location.zipCode('#####'),
    };
}

// API: booking payload for the restful-booker demo API
export function buildBooking() {
    const checkin = faker.date.soon({ days: 30 });
    const checkout = faker.date.soon({ days: 10, refDate: checkin });
    return {
        firstname:    faker.person.firstName(),
        lastname:     faker.person.lastName(),
        totalprice:   faker.number.int({ min: 50, max: 999 }),
        depositpaid:  true,
        bookingdates: {
            checkin:  checkin.toISOString().split('T')[0],
            checkout: checkout.toISOString().split('T')[0],
        },
        additionalneeds: 'Breakfast',
    };
}

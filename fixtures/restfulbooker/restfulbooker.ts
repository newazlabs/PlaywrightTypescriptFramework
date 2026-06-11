// API fixture — same idea as the page-object fixtures, but wires API clients
// around Playwright's built-in `request` fixture instead of `page`.
// API tests never launch a browser, so they run very fast.
import { test as base } from '@playwright/test';
import { AuthApi }    from '../../api/restfulbooker/01_AuthApi';
import { BookingApi } from '../../api/restfulbooker/02_BookingApi';

type RestfulBookerApis = {
    authApi:    AuthApi;
    bookingApi: BookingApi;
};

export const test = base.extend<RestfulBookerApis>({
    authApi:    async ({ request }, use) => { await use(new AuthApi(request)); },
    bookingApi: async ({ request }, use) => { await use(new BookingApi(request)); },
});

export { expect } from '@playwright/test';

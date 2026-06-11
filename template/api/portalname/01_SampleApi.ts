// PURPOSE: Template for an API client — the API-layer equivalent of a Page Object.
// A UI page object wraps locators + actions on one SCREEN; an API client wraps
// the HTTP calls for one RESOURCE (users, orders, bookings, ...).
//
// WHY: Tests stay readable ("usersApi.createUser(...)") and if an endpoint
// changes you fix it here in one place. API tests need no browser, so they run
// in seconds — perfect for @smoke suites and for seeding data before UI tests.
//
// HOW IT GETS INTO TESTS: add a fixture (see fixtures/restfulbooker/restfulbooker.ts)
// that wraps Playwright's built-in `request` fixture:
//   sampleApi: async ({ request }, use) => { await use(new SampleApi(request)); },
//
// WORKING EXAMPLE: see api/restfulbooker/ and tests/restfulbooker/ for a full
// CRUD + auth example against a real public API.

// TODO: rename this file and class to match the resource e.g. "01_UsersApi.ts" / "UsersApi"
// TODO: rename import path "portalname" to your portal name
import { APIRequestContext, APIResponse } from '@playwright/test';
import { portalnameConfig } from '../../config/portalname/portalname';

export class SampleApi {
    private baseUrl = portalnameConfig.baseUrl;

    constructor(private request: APIRequestContext) {}

    // One method per endpoint. Return the raw APIResponse so tests decide
    // what to assert (status, body fields, headers).

    async getItem(id: number): Promise<APIResponse> {
        return this.request.get(`${this.baseUrl}/api/items/${id}`);   // TODO: real endpoint
    }

    async createItem(data: Record<string, unknown>): Promise<APIResponse> {
        return this.request.post(`${this.baseUrl}/api/items`, { data });   // TODO: real endpoint
    }

    // If the API needs auth, accept a token and send it the way the API expects:
    // async deleteItem(id: number, token: string): Promise<APIResponse> {
    //     return this.request.delete(`${this.baseUrl}/api/items/${id}`, {
    //         headers: { Authorization: `Bearer ${token}` },
    //     });
    // }
}

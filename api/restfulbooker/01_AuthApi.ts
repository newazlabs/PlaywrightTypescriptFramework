// PURPOSE: API client for the /auth endpoint — the API-layer equivalent of a
// Page Object. It wraps raw HTTP calls behind readable methods so tests never
// build requests by hand.
import { APIRequestContext, expect } from '@playwright/test';
import { restfulbookerConfig } from '../../config/restfulbooker/restfulbooker';

export class AuthApi {
    constructor(private request: APIRequestContext) {}

    // Returns an auth token used by write operations (update/delete).
    async createToken(): Promise<string> {
        const response = await this.request.post(`${restfulbookerConfig.baseUrl}/auth`, {
            data: restfulbookerConfig.admin,
        });
        expect(response.ok(), 'auth token request should succeed').toBeTruthy();
        const body = await response.json();
        return body.token;
    }
}

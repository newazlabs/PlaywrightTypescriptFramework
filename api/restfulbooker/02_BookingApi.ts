// PURPOSE: API client for the /booking endpoints (CRUD).
// Methods return the raw APIResponse so tests decide what to assert.
import { APIRequestContext, APIResponse } from '@playwright/test';
import { restfulbookerConfig } from '../../config/restfulbooker/restfulbooker';

export type Booking = {
    firstname: string;
    lastname: string;
    totalprice: number;
    depositpaid: boolean;
    bookingdates: { checkin: string; checkout: string };
    additionalneeds?: string;
};

export class BookingApi {
    private baseUrl = restfulbookerConfig.baseUrl;

    constructor(private request: APIRequestContext) {}

    async ping(): Promise<APIResponse> {
        return this.request.get(`${this.baseUrl}/ping`);
    }

    async createBooking(booking: Booking): Promise<APIResponse> {
        return this.request.post(`${this.baseUrl}/booking`, { data: booking });
    }

    async getBooking(bookingId: number): Promise<APIResponse> {
        return this.request.get(`${this.baseUrl}/booking/${bookingId}`);
    }

    // Write operations require the token from AuthApi, sent as a cookie.
    async updateBooking(bookingId: number, booking: Booking, token: string): Promise<APIResponse> {
        return this.request.put(`${this.baseUrl}/booking/${bookingId}`, {
            data: booking,
            headers: { Cookie: `token=${token}` },
        });
    }

    async deleteBooking(bookingId: number, token: string): Promise<APIResponse> {
        return this.request.delete(`${this.baseUrl}/booking/${bookingId}`, {
            headers: { Cookie: `token=${token}` },
        });
    }
}

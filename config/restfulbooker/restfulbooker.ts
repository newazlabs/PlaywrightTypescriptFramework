// Restful Booker is a public demo REST API (https://restful-booker.herokuapp.com)
// used here to demonstrate the framework's API-testing layer.
// Values can be overridden per environment via .env (see .env.example).
export const restfulbookerConfig = {
    baseUrl: process.env.RESTFULBOOKER_BASE_URL ?? 'https://restful-booker.herokuapp.com',
    admin: {
        username: process.env.RESTFULBOOKER_USERNAME ?? 'admin',
        password: process.env.RESTFULBOOKER_PASSWORD ?? 'password123',
    },
};

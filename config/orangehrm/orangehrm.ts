// Values can be overridden per environment via .env (see .env.example).
export const orangehrmConfig = {
    baseUrl: process.env.ORANGEHRM_BASE_URL ?? 'https://opensource-demo.orangehrmlive.com',
    users: {
        admin: {
            username: process.env.ORANGEHRM_USERNAME ?? 'Admin',
            password: process.env.ORANGEHRM_PASSWORD ?? 'admin123',
        },
        invalid: { username: 'invalid_user', password: 'wrong_password' },
    },
};

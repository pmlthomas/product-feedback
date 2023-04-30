/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
    env: {
        DB_URI: "mysql://root:root@localhost:3306/product-feedback",
        GOOGLE_CLIENT_ID:
            "968635097812-svhnuvr3tsohmt0rqh89prtbv72mmakv.apps.googleusercontent.com",
        GOOGLE_CLIENT_SECRET: "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",
    },
};

module.exports = nextConfig;

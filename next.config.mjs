/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                key: "Access-Control-Allow-Origin",
                value: "*"
            },
            {
                key: "Access-Control-Allow-Methods",
                value: "GET"
            },
            {
                key: "Access-Control-Allow-Headers",
                value: "Content-Type, Authorization",
            }
        ]
    }
};

export default nextConfig;

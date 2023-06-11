/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    basePath: "/DIV-Protocol",
    assetPrefix: "/DIV-Protocol",
    async rewrites() {
        return [
            {
                source: '/images/:path*',
                destination: '/DIV-Protocol/images/:path*', // The :path parameter isn't used here so will be automatically passed in the query
            },
        ]
    },
}

module.exports = nextConfig

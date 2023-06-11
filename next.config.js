/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        loader: 'akamai',
        path: '',
    },
    assetPrefix: 'https://div-protocol.github.io/DIV-Protocol/',
}

module.exports = nextConfig

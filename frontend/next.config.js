const {i18n} = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    // swcMinify: true,
    output: 'standalone',
    images: {domains: ['localhost', 'burger-nextjs.herokuapp.com']},
    i18n,

    env: {
        someKey: 'some-value-from-env'
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
}

module.exports = nextConfig

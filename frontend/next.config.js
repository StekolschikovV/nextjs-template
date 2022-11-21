const {i18n} = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    // swcMinify: true,
    output: 'standalone',
    images: {domains: ['localhost']},
    i18n,

    env: {
        someKey: 'some-value-from-env'
    }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID,
    GOOGLE_PROJECT_ID: process.env.GOOGLE_PROJECT_ID,
    GOOGLE_PRIVATE_KEY_ID: process.env.GOOGLE_PRIVATE_KEY_ID,
    GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
    GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_AUTH_URI: process.env.GOOGLE_AUTH_URI,
    GOOGLE_TOKEN_URI: process.env.GOOGLE_TOKEN_URI,
    GOOGLE_AUTH_PROVIDER_X509_CERT_URL: process.env.GOOGLE_AUTH_PROVIDER_X509_CERT_URL,
    GOOGLE_CLIENT_X509_CERT_URL: process.env.GOOGLE_CLIENT_X509_CERT_URL,
    GOOGLE_UNIVERSE_DOMAIN: process.env.GOOGLE_UNIVERSE_DOMAIN,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'images.pexels.com',
      'i.imgur.com',
      'imgur.com'
    ],
  },
}

module.exports = nextConfig

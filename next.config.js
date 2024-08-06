/** @type {import('next').NextConfig} */
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
});

const nextConfig = {
  reactStrictMode: true,
  env: {
    MAILGUN_API_KEY: process.env.MAILGUN_API_KEY,
    EMAIL_SERVER_HOST: process.env.EMAIL_SERVER_HOST,
    EMAIL_SERVER_PORT: process.env.EMAIL_SERVER_PORT,
    EMAIL_SERVER_USER: process.env.EMAIL_SERVER_USER,
    EMAIL_SERVER_PASSWORD: process.env.EMAIL_SERVER_PASSWORD,
    EMAIL_FROM: process.env.EMAIL_FROM,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NOTION_PARENT_PAGE_ID: process.env.NOTION_PARENT_PAGE_ID,
    NOTION_CLIENT_ID: process.env.NOTION_CLIENT_ID,
    NOTION_CLIENT_SECRET: process.env.NOTION_CLIENT_SECRET,
    NOTION_AUTH_URL: process.env.NOTION_AUTH_URL,
    BASE_URL: process.env.BASE_URL,
    DATABASE_URL: process.env.DATABASE_URL
  },
  images: {
    domains: ["randomuser.me"],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg/,
      issuer: /\.tsx?$/,
      include: [options.dir],
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@svgr/webpack",
          options: {
            babel: false,
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

module.exports = withNextra(nextConfig);

/* eslint-disable @typescript-eslint/no-var-requires */
const crypto = require("crypto")

const nonce = crypto
  .createHash("sha256")
  .update(crypto.randomUUID())
  .digest("base64")
const isDev = process.env.NODE_ENV !== "production"
const ContentSecurityPolicy = `
  base-uri 'self';
  default-src 'self' *.ktekdesign.com *.facebook.com *.google-analytics.com;
  script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https: 'unsafe-inline'${
  isDev ? " 'unsafe-eval' http:" : ""
};
  style-src 'self' 'unsafe-inline';
  font-src 'self' data:;
`

/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path")
const nextConfig = {
  swcMinify: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    nonce,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
          },
        ],
      },
    ]
  },
  optimizeFonts: false,
}

module.exports = nextConfig

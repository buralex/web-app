/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';
const basePath = isDev ? undefined : '/web-app';

const nextConfig = {
  basePath,
  experimental: {
    // https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
    missingSuspenseWithCSRBailout: false,
  },
  output: 'export',
  // reactStrictMode: false, // Set this to "false" if you want to disable "double re-rendering"
};

export default nextConfig;

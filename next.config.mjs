/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['assets.coingecko.com'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'assets.coingecko.com',
              port: '',
              pathname: '/images/*',
            },
          ],
      },
};

export default nextConfig;

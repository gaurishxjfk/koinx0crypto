/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['assets.coingecko.com','coin-images.coingecko.com'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'assets.coingecko.com',
              port: '',
              pathname: '/images/*',
            },
            {
              protocol: 'https',
              hostname: 'coin-images.coingecko.com',
              port: '',
              pathname: '/images/*',
            }
          ],
      },
};

export default nextConfig;

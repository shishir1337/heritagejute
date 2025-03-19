/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'heritagejute.com',
                port: '',
                pathname: '/**',
            },
        ]
    }
};  

export default nextConfig;

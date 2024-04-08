/** @type {import('next').NextConfig} */

const nextConfig = {
    sassOptions: {
        includePaths: ['@/assets'],
        prependData: `@import '@/assets/var.scss'; @import '@/assets/mixins.scss';`
    }
};

export default nextConfig;

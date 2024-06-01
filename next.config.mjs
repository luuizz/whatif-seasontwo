import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
  const withVanillaExtract = createVanillaExtractPlugin();
  
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    swcMinify: true,
    images: {
      domains: ["whatif-seasontwo.cdn.prismic.io"],
    }
  };
  
  export default withVanillaExtract(nextConfig);

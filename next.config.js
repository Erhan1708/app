/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   images: {
      domains: [
         'test-docs.stores.kg',
         'docs.stores.kg',
         'test-docs.stores.kg/images',
         'docs.stores.kg/images',
         'test-docs.stores.kg/images/product_images',
         'docs.stores.kg/images/product_images',
         'localhost',
         'web.imd.kg',
         'static-s.aa-cdn.net'
      ],
   },
   // images: {
   //    remotePatterns: [
   //       {
   //          protocol: 'https',
   //          hostname: 'test-docs.stores.kg',
   //          pathname: '/images/product_images',
   //       },
   //    ],
   // },
}

module.exports = nextConfig

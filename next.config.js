const { i18n } = require('./next-i18next.config');

module.exports = {
  images: {
    domains: ['example.com'],
  },
  i18n,
  // async rewrites() {
  //   return [
  //     // { source: "/:locales(en|vn)?/posts/post", destination: "/posts/post" },
  //   ]

  // }
}

const { i18n } = require('./next-i18next.config');
// const withImages = require("next-images");

module.exports = {
  images: {
    domains: ['http://thuongmainongsan.com:8080/thuongmainongsan'],
  },
  i18n,
  // async rewrites() {
  //   return [
  //     // { source: "/:locales(en|vn)?/posts/post", destination: "/posts/post" },
  //   ]

  // }
}

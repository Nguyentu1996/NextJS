const { i18n } = require('./next-i18next.config');
// const withImages = require("next-images");

module.exports = {
  images: {
    domains: ['http://192.168.4.222:8080/thuongmainongsan'],
  },
  i18n,
  // async rewrites() {
  //   return [
  //     // { source: "/:locales(en|vn)?/posts/post", destination: "/posts/post" },
  //   ]

  // }
}

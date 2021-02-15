const webpack = require('webpack')
export default {
  router: {
    base: '/kanebo/2020_09Event/',
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  // target: 'server',
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: '佳麗寶Kanebo 2020周年慶｜極致好禮，美麗燦爛一整年！',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '網紅真心推薦周慶必購組、年度回饋買越多省越多...細緻柔嫩、膨潤Q彈、透亮無瑕的肌膚就是要超前部署一次GET~',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        property: 'og:title',
        content: '佳麗寶Kanebo 2020周年慶｜極致好禮，美麗燦爛一整年！',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        property: 'og:description',
        content:
          '網紅真心推薦周慶必購組、年度回饋買越多省越多...細緻柔嫩、膨潤Q彈、透亮無瑕的肌膚就是要超前部署一次GET~',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        property: 'og:image',
        content:
          'http://cee-u.com/kanebo/2020_09Event/2020_08_Kanebo_FB_1200X630.jpg',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '' }],
  },
  /*
   ** Global CSS
   */
  css: [
    { src: 'normalize.css' },
    { src: 'swiper/swiper-bundle.css', lang: 'css' },
    { src: 'assets/styles/app.styl', lang: 'stylus' },
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '@/plugins/babel-polyfill.js',
    '@/plugins/vuelidate.js',
    '@/plugins/axios.js',
    '@/plugins/mixin.js',
    '@/plugins/vue-device-detector.js',
    '@/plugins/classes.js',
    '@/plugins/swiper.js',
    '@/plugins/components.js',
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    // '@nuxtjs/stylelint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    vendor: ['jquery'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
      }),
    ],
    loaders: {
      fontUrl: {
        limit: 1,
      },
      imgUrl: {
        limit: 0,
      },
    },
  },
  styleResources: {
    // your settings here
    sass: [],
    scss: [],
    less: [],
    stylus: ['~assets/styles/_base.styl'],
  },
}

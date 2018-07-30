module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-quna',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover' },
      { hid: 'description', name: 'description', content: 'Nuxt.js实践的模仿去哪项目' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  css: ['~assets/css/reset.css','~assets/css/iconfont.css',
    {
	    src: 'swiper/dist/css/swiper.css'
    }
  ],
  plugins: [
    { src: '~plugins/swiper.js', ssr: false },
    { src: '~plugins/better-scroll.js'}
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}


module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Meet Amico - Your New AI Friend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'metaDescription',
        name: 'description',
        content: 'Hi there. I am Amico, your new AI friend. Are you up for a chat? Visit my website to learn more and start talking to an AI 😊'
      },
      {
        hid: 'ogTitle',
        property: 'og:title',
        content: 'Meet Amico - Your New AI Friend'
      },
      {
        hid: 'ogDescription',
        property: 'og:description',
        content: 'Hi there. I am Amico, your new AI friend. Are you up for a chat? Visit my website to learn more and start talking to an AI 😊'
      },
      {
        hid: 'ogUrl',
        property: 'og:url',
        content: 'https://www.amico.ai'
      },
      {
        hid: 'ogImage',
        property: 'og:image',
        content: 'https://amico.ai/static/images/social-site.png'
      },
      {
        hid: 'ogImageAlt',
        property: 'og:image:alt',
        content: 'Amico.ai Site Welcome Image'
      }
    ],
    link: [
      { rel: 'canonical', href: 'https://www.amico.ai' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#ffcc00' },
  /*
  ** Set external plugins
  */
  plugins: ['~/directives/scroll-fire.js'],
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],
  /*
  ** Customize app manifest
  */
  manifest: {
    name: 'Amico.ai',
    short_name: 'Amico.ai',
    description: 'Hi there. I am Amico, your new AI friend. Are you up for a chat? Visit my website to learn more and start talking to an AI 😊',
    lang: 'en-US',
    start_url: '/',
    scope: '/',
    display: 'fullscreen',
    background_color: '#f6f8f9',
    theme_color: '#ffcc00',
    icons: [
      {
        'src': 'app-icons/16x16.png',
        'sizes': '16x16',
        'type': 'image/png'
      },
      {
        'src': 'app-icons/32x32.png',
        'sizes': '32x32',
        'type': 'image/png'
      },
      {
        'src': 'app-icons/64x64.png',
        'sizes': '64x64',
        'type': 'image/png'
      },
      {
        'src': 'app-icons/144x144.png',
        'sizes': '144x144',
        'type': 'image/png'
      },
      {
        'src': 'app-icons/192x192.png',
        'sizes': '192x192',
        'type': 'image/png'
      },
      {
        'src': 'app-icons/256x256.png',
        'sizes': '256x256',
        'type': 'image/png'
      },
      {
        'src': 'app-icons/512x512.png',
        'sizes': '512x512',
        'type': 'image/png'
      }
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['vue-carousel'],
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
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

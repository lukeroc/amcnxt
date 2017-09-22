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
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
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

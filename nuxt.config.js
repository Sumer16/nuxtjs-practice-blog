const bodyParser = require('body-parser');
const axios = require('axios');

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'WD Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My cool web development blog' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital@1&display=swap' }
    ]
  },

  loading: { 
    color: '#0df976', 
    height: '5px', 
    duration: 5000 
  },

  loadingIndicator: {
    name: 'circle',
    color: '#0df976'
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
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
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: process.env.BASE_URL || 'https://nuxt-practice-project.firebaseio.com',
    credentials: false
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-practice-project.firebaseio.com',
    fbAPIKey: '{YOUR_FIREBASE_API}'
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  // router: {
  //   middleware: 'log'
  // }
  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ],
  generate: {
    routes: function() {
      return axios.get('https://nuxt-practice-project.firebaseio.com')
      .then(res => {
        const routes = [];
        for(const key in res.data) {
          routes.push({ 
            route: '/posts/' + key,
            payload: {postData: res.data[key]}
          })
        }
        return routes
      })
    }
  }
}

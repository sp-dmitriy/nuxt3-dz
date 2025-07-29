// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiurl: ''
    }
  },
  icon: {
    customCollections: [
      {
        prefix: 'icons',
        dir: './assets/icons'
      },
    ],
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  postcss: {
    plugins: {
      'postcss-nested': {}
    }
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/icon'
  ]
})
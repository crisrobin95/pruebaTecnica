

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/styles/reset.css',
    "@/assets/styles/variables.css"
  ],
  runtimeConfig:{
    public:{
      twitchClienteId: process.env.TWITCH_CLIENT_ID,
    },
    twitchClientSecret: process.env.TWITCH_CLIENT_SECRET,
  },


  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image'
  ],
  vite: {
    css:{
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/main.scss";'
        }
      }
    }
  },
  })
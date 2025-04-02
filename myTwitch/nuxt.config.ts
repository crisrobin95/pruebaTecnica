import i18nConfig from './config/i18n'
import { alias } from './config/alias'
import { cssImports } from './config/css'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/test-utils/module',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/icon',
    '@nuxtjs/strapi',
  ],
  devtools: { enabled: true },
  ssr: false,
  spaLoadingTemplate: false,
  css: cssImports,
  imports: {
    dirs: ['core/globals'],
  },
  alias,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "sass:map"; @import "assets/styles/mixin.scss";',
        },
      },
    },
    build: {
      rollupOptions: {
        output: {
          assetFileNames: '_nuxt/[name].[ext]',
          entryFileNames: '_nuxt/[name].js',
          chunkFileNames: '_nuxt/[name].js',
        },
      },
    },
  },
  i18n: {
    ...i18nConfig,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      fallbackLocale: 'es',
    },
  },
  strapi: {
    url: process.env.STRAPI_URL,
    prefix: '/api',
    version: 'v5',
  },
})

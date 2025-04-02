import type { ModuleOptions } from '@nuxtjs/i18n'
import { pages } from './i18n/pages'

export default {
  lazy: true,
  defaultLocale: 'es',
  locales: [
    { code: 'es', language: 'es' },
    { code: 'en', language: 'en' },
    { code: 'pt-BR', language: 'pt-BR' },
  ],
  strategy: 'prefix_except_default',
  customRoutes: 'config',
  pages,
} as Partial<ModuleOptions>

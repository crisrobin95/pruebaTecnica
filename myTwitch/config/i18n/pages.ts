import type { ModuleOptions } from '@nuxtjs/i18n'

export const pages: ModuleOptions['pages'] = {
  '3d': {
    en: '/three-d',
    'pt-BR': '/tres-d',
  },
  contacto: {
    es: '/contacto',
    en: '/contact',
    'pt-BR': '/contato',
  },
  'contenidos/index': {
    es: '/contenidos',
    en: '/contents',
    'pt-BR': '/conteudos',
  },
  'expertos/index': {
    es: '/expertos',
    en: '/experts',
    'pt-BR': '/especialistas',
  },
  'plan-site': {
    es: '/plan-site',
    en: '/plan-site',
    'pt-BR': '/plan-site',
  },
  'dental-procedures-simulator': {
    es: '/dental-procedures-simulator',
    en: '/dental-procedures-simulator',
    'pt-BR': '/dental-procedures-simulator',
  },
  'partners/index': {
    es: '/partners',
    en: '/partners',
    'pt-BR': '/parceiros',
  },
  'series/index': {
    es: '/series',
    en: '/series',
    'pt-BR': '/series',
  },
  'account/index': {
    es: '/mi-cuenta',
    en: '/my-account',
    'pt-BR': '/minha-conta',
  },
}

export const i18nConfig: Partial<ModuleOptions> = {
  customRoutes: 'config',
  defaultLocale: 'es',
  pages,
  strategy: 'prefix_and_default',
}

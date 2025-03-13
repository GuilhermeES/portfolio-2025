// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/bootstrap.scss', '~/assets/main.scss'],
  plugins: [{ src: '~/plugins/bootstrap.client.ts', mode: 'client' }],
  modules: ['@nuxtjs/i18n', '@nuxtjs/color-mode'],
  app: {
    head: {
      title: 'Portfolio - Guilherme ES',
      htmlAttrs: {
        lang: 'pt-BR',
      },
      meta: [
        { name: 'description', content: 'Portfólio de Guilherme ES, apresentando projetos e habilidades em desenvolvimento web.' },
        { name: 'robots', content: 'noindex, nofollow' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },
  i18n: {
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'pt',
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English(US)',
        file: 'en-US.json',
      },
      {
        code: 'pt',
        iso: 'pt-BR',
        name: 'Português(BR)',
        file: 'pt-BR.json',
      },
    ],
  },
  colorMode: {
    preference: 'dark',
  },
})

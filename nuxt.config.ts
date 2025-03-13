// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/bootstrap.scss', '~/assets/main.scss'],
  plugins: [{ src: '~/plugins/bootstrap.client.ts', mode: 'client' }],
  modules: ['@nuxtjs/i18n', '@nuxtjs/color-mode'],
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

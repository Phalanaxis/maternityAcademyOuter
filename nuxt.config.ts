
export default defineNuxtConfig({
  plugins: [
    { src: '~/plugins/ymapPlugin.js',  mode: 'client' }
  ],
  modules: [
    '@nuxt/image-edge',
  ],
  css: [
    '@/assets/scss/_base.scss',
    '@/assets/scss/_fonts.scss'
  ],
  vite: {
    logLevel: "info",
    optimizeDeps: {
      include: [
        'vue',
        'vue-yandex-maps'
      ]
    }
  }
})

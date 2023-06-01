// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 modules:[
  '@nuxtjs/tailwindcss',
  '@nuxtjs/color-mode'
 ],
 css: [
  '@fortawesome/fontawesome-svg-core/styles.css'
],
  build:{
    transpile: [
      "@fortawesome/vue-fortawesome",
      "@fortawesome/fortawesome-svg-core",
      "@fortawesome/free-brands-svg-icons"
    ]
  }
})



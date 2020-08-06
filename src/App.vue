<template lang="pug">
  #app
    Banner
    Navbar
    Fundador
    Nosotros
    Services
</template>

<script>
import Banner from './components/index/Banner.vue'
import Navbar from './components/index/Navbar.vue'
import Fundador from './components/index/Fundador.vue'
import Nosotros from './components/index/Nosotros.vue'
import Services from './components/index/Services.vue'

export default {
  name: 'App',
  components: {
    Banner,
    Navbar,
    Fundador,
    Nosotros,
    Services
  }
}
</script>

<style>
</style>

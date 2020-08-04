<template lang="pug">
  #app
    Banner
    Navbar
    Fundador
    Nosotros
</template>

<script>
import Banner from './components/index/Banner.vue'
import Navbar from './components/index/Navbar.vue'
import Fundador from './components/index/Fundador.vue'
import Nosotros from './components/index/Nosotros.vue'

export default {
  name: 'App',
  components: {
    Banner,
    Navbar,
    Fundador,
    Nosotros
  }
}
</script>

<style>
</style>

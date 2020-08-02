<template lang="pug">
  #app
    Banner
    Navbar
    Fundador
</template>

<script>
import Banner from './components/index/Banner.vue'
import Navbar from './components/index/Navbar.vue'
import Fundador from './components/index/Fundador.vue'

export default {
  name: 'App',
  components: {
    Banner,
    Navbar,
    Fundador
  }
}
</script>

<style>
</style>

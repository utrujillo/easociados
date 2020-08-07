<template lang="pug">
  #app
    Banner
    Navbar
    Fundador
    Nosotros1
    Nosotros2
    Servicios1
    Servicios2
</template>

<script>
import Banner from './components/index/Banner.vue'
import Navbar from './components/index/Navbar.vue'
import Fundador from './components/index/Fundador.vue'
import Nosotros1 from './components/index/Nosotros1.vue'
import Nosotros2 from './components/index/Nosotros2.vue'
import Servicios1 from './components/index/Servicios1.vue'
import Servicios2 from './components/index/Servicios2.vue'

export default {
  name: 'App',
  components: {
    Banner,
    Navbar,
    Fundador,
    Nosotros1,
    Nosotros2,
    Servicios1,
    Servicios2
  }
}
</script>

<style>
</style>

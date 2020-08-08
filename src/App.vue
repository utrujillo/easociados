<template lang="pug">
  #app
    Banner
    Navbar
    Fundador
    Nosotros1
    Nosotros2
    Servicios
    Portafolio
    Opinion
    Contacto
</template>

<script>
import Banner from './components/index/Banner.vue'
import Navbar from './components/index/Navbar.vue'
import Fundador from './components/index/Fundador.vue'
import Nosotros1 from './components/index/Nosotros1.vue'
import Nosotros2 from './components/index/Nosotros2.vue'
import Servicios from './components/index/Servicios.vue'
import Portafolio from './components/index/Portafolio.vue'
import Opinion from './components/index/Opinion.vue'
import Contacto from './components/index/Contacto.vue'

export default {
  name: 'App',
  components: {
    Banner,
    Navbar,
    Fundador,
    Nosotros1,
    Nosotros2,
    Servicios,
    Portafolio,
    Opinion,
    Contacto
  }
}
</script>

<style>
</style>

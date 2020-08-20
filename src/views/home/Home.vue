<template lang="pug">
div
  Banner
  Navbar
  Fundador
  Nosotros1
  Nosotros2
  Servicios
  Portafolio
  Opinion
  Contacto
  Mapa
  Footer
</template>

<script>
import Banner from '@/views/home/Banner.vue'
import Navbar from '@/views/home/Navbar.vue'
import Fundador from '@/views/home/Fundador.vue'
import Nosotros1 from '@/views/home/Nosotros1.vue'
import Nosotros2 from '@/views/home/Nosotros2.vue'
import Servicios from '@/views/home/Servicios.vue'
import Portafolio from '@/views/home/Portafolio.vue'
import Opinion from '@/views/home/Opinion.vue'
import Contacto from '@/views/home/Contacto.vue'
import Mapa from '@/views/home/Mapa.vue'
import Footer from '@/views/Footer.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    Navbar,
    Fundador,
    Nosotros1,
    Nosotros2,
    Servicios,
    Portafolio,
    Opinion,
    Contacto,
    Mapa,
    Footer
  }
}
</script>
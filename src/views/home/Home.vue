<template lang="pug">
.loader(v-if='loading') 
  .textoloader 
    h5 Procesando información
div(v-else='')
  Banner
  Navbar
  Fundador
  Nosotros1
  Nosotros2
  Servicios(:parentData='{ categories: categories, jobs: jobs }')
  Portafolio(:parentData='{ categories: categories, jobs: jobs }')
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
import Footer from '@/views/home/Footer.vue'

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
  },
  data () {
    return {
      categories: [],
      jobs: [],
      loading: true
    }
  },
  mounted: function () {
    this.index()
  },
  methods: {
    index: function() {
      const reqCategory = this.$http.get('/v1/categories')
      const reqJob      = this.$http.get('/v1/jobs')
      
      this.$http.all([reqCategory, reqJob])
      .then(this.$http.spread((...responses) => {
        // Mostrando las opciones del catalogo dependiendo de la vista
        this.categories = responses[0].data
        this.jobs       = responses[1].data
        this.loading    = false
      })).catch(errors => {
        // Lanzar toast
        console.log(`Error al leer la informacion ${errors}`)
        this.loading = false
      })
    },
  }
}
</script>
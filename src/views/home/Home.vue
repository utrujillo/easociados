<template lang="pug">
.loader(v-if='loading') 
  .textoloader 
    h5 Procesando información
div(v-else='')
  Banner
  Navbar(v-on:selectedItem='scrollToElement')
  Fundador
  Estrategia1
  Estrategia2
  Servicios(:parentData='{ categories: categories, jobs: jobs }')
  Portafolio(:parentData='{ categories: categories, jobs: jobs }')
  Opinion(:parentData='{ opinion: opinion }')
  Contacto
  Mapa
  Footer
</template>

<script>
import Banner from '@/views/home/Banner.vue'
import Navbar from '@/views/home/Navbar.vue'
import Fundador from '@/views/home/Fundador.vue'
import Estrategia1 from '@/views/home/Estrategia1.vue'
import Estrategia2 from '@/views/home/Estrategia2.vue'
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
    Estrategia1,
    Estrategia2,
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
      loading: true,
      sticky: 0,
      navbar: ''
    }
  },
  mounted: function () {
    this.index()
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    index: function() {
      const reqCategory = this.$http.get('/v1/categories')
      const reqJob      = this.$http.get('/v1/jobs')
      const reqOpinion  = this.$http.get('/v1/opinions/random')
      
      this.$http.all([reqCategory, reqJob, reqOpinion])
      .then(this.$http.spread((...responses) => {
        // Mostrando las opciones del catalogo dependiendo de la vista
        this.categories = responses[0].data
        this.jobs       = responses[1].data
        this.opinion    = responses[2].data
        this.loading    = false
      })).catch(errors => {
        // Lanzar toast
        console.log(`Error al leer la informacion ${errors}`)
        this.loading = false
      })

      setTimeout( () => {
        this.navbar = document.getElementById("navegacion")
        if( this.navbar != '' || this.navbar != null){
          this.sticky = this.navbar.offsetTop  
        }
      }, 1500 )
    },
    scrollToElement: function( id ) {
      const el = document.getElementById( id )
      
      if( el )
        el.scrollIntoView({ behavior: 'smooth' })
    },
    handleScroll: function() {
      if( this.navbar != '' || this.navbar != null){
        window.pageYOffset >= this.sticky ? this.navbar.classList.add( 'sticky' ) : this.navbar.classList.remove( 'sticky' )
      } 
    }
  }
}
</script>
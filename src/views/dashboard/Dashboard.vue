<template lang="pug">
div
  Navbar(v-on:dinamycComponent='onNavbarClick')
  .container-fluid
    component(:is='currentComponent')
  
      
</template>

<script>
import Navbar from '@/views/dashboard/Navbar.vue'
import Categorias from '@/views/dashboard/Categorias.vue'
import Trabajos from '@/views/dashboard/Trabajos.vue'

export default {
  name: 'Dashboard',
  components: {
    Navbar,
    Categorias,
    Trabajos
  },
  data() {
    return {
      currentComponent: ''
    }
  },
  mounted () {
    this.currentComponent = Trabajos
  },
  methods: {
    /**
     * * Metodo encargado de recibir el elemento seleccioando desde el componente hijo (Navbar)
     */
    onNavbarClick: function(component){
      switch(component){
        case 'cat': this.currentComponent = Categorias; break;
        case 'work': this.currentComponent = Trabajos; break;
        default: this.currentComponent = '';
      }
      
    }
  }
}
</script>

<style lang="scss">
  @import './src/assets/scss/easociados.scss'
</style>
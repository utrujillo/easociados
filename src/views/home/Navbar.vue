<template lang="pug">
nav#navegacion.navbar.navbar-expand-lg.navbar-light.bg-custom
  div.navbar-brand(@click='login')
    img.d-inline-block.align-top(src='@/assets/images/icons/navbar_logo.png', width='235', height='50')
  button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarText', aria-controls='navbarText', aria-expanded='false', aria-label='Toggle navigation')
    span.navbar-toggler-icon
  #navbarText.collapse.navbar-collapse
    ul.navbar-nav.ml-auto
      li.nav-item
        a.nav-link(@click='selectedItem("inicio")') Inicio 
      li.nav-item
        a.nav-link(@click='selectedItem("directivo")') Directivo
      li.nav-item
        a.nav-link(@click='selectedItem("nosotros")') Nosotros
      li.nav-item
        a.nav-link(@click='selectedItem("servicios")') Servicios
      li.nav-item
        a.nav-link(@click='selectedItem("portafolio")') Portafolio
      li.nav-item
        a.nav-link(@click='selectedItem("contacto")') Contactanos
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    selectedItem ( val ) {
      this.$emit('selectedItem', val)
    },
    login () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang='scss'>
  @import './src/assets/scss/index/navbar.scss'
</style>

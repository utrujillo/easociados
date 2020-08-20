<template lang="pug">
nav.navbar.navbar-expand-lg.navbar-light.bg-custom
  a.navbar-brand(href='/')
    img.d-inline-block.align-top(src='@/assets/images/icons/navbar_logo.png', width='235', height='50')
  button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarText', aria-controls='navbarText', aria-expanded='false', aria-label='Toggle navigation')
    span.navbar-toggler-icon
  #navbarText.collapse.navbar-collapse
    ul.navbar-nav.ml-auto
      li.nav-item.active
        a.nav-link(href='/') Inicio 
      li.nav-item
        a.nav-link(href='#directivo') Directivo
      li.nav-item
        a.nav-link(href='#nosotros') Nosotros
      li.nav-item
        a.nav-link(href='#servicios') Servicios
      li.nav-item
        a.nav-link(href='#portafolio') Portafolio
      li.nav-item
        a.nav-link(href='#contacto') Contactanos
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang='scss'>
  @import './src/assets/scss/index/navbar.scss'
</style>

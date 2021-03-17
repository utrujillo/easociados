<template lang="pug">
div
  nav.navbar.navbar-expand-lg.navbar-light.bg-custom
    a.navbar-brand(href='/')
      img.d-inline-block.align-top(src='@/assets/images/icons/navbar_logo.png', width='235', height='50')
    button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarText', aria-controls='navbarText', aria-expanded='false', aria-label='Toggle navigation')
      span.navbar-toggler-icon
    #navbarText.collapse.navbar-collapse
      ul.navbar-nav.ml-auto
        li.nav-item
          a.nav-link(v-on:click="emitToParent('cat')") Categorias
        li.nav-item
          a.nav-link(v-on:click="emitToParent('work')") Trabajos
</template>

<script>


export default {
  name: 'Navbar',
  methods: {
    emitToParent: function(component){
      this.$emit('dinamycComponent', component)
    }
  }
}
</script>
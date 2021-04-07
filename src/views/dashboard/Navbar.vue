<template lang="pug">
div
  nav.navbar.navbar-expand-lg.navbar-light.bg-custom
    a.navbar-brand(href='/')
      img.d-inline-block.align-top(src='@/assets/images/icons/navbar_logo.png', width='235', height='50')
    div.text-primary
      span.text-primary {{ usuario }}
      span.fs-small.text-muted  [ {{ username }} ]
    button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarText', aria-controls='navbarText', aria-expanded='false', aria-label='Toggle navigation')
      span.navbar-toggler-icon
    #navbarText.collapse.navbar-collapse
      ul.navbar-nav.ml-auto
        li.nav-item
          a.nav-link(v-on:click="emitToParent('cat')") Categorias
        li.nav-item
          a.nav-link(v-on:click="emitToParent('work')") Trabajos
        li.nav-item
          a.nav-link(v-on:click="emitToParent('users')") Usuarios
        li.nav-item
          a.nav-link
            fas.green.mr-1(icon='sign-out-alt', @click="closeSession", title="Cerrar sesion")
</template>

<script>


export default {
  name: 'Navbar',
  data () {
    return {
      username: '',
      usuario: ''
    }
  },
  mounted () {
    this.username = localStorage.getItem('username')
    this.usuario = localStorage.getItem('usuario')
  },
  methods: {
    emitToParent: function(component){
      this.$emit('dinamycComponent', component)
    },
    closeSession: function() {
      localStorage.removeItem('access_token');
      this.$router.push("/")
    }
  }
}
</script>
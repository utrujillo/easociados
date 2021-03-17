<template lang="pug">
section.login.d-flex.justify-content-center.align-items-center
  .container.h-100
    .row
      .col-lg-6.pr-lg-0
        .login-image.h-100
          img(src='@/assets/images/photos/security.jpg').w-100.h-100
      .col-lg-6.pl-lg-0
        .widget.h-100
          h3.montserrat.black2 Inicio de sesión
          .formulario
            form(action='#')
              input(id="username", name="username", placeholder="Usuario" v-model='username').form-control.bottom35
              input(type="password" id="password", name="password", placeholder="Contraseña" v-model='password').form-control.bottom35
              .gradient-button.d-flex.justify-content-center.align-items-center(v-on:click='login') Iniciar sesión
</template>

<script>


export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$store.dispatch('retreiveToken', {
        username: this.username,
        password: this.password
      }).then( response => {
        this.$router.push({ name: 'Dashboard' })
        return response
      })
    }
  }
}
</script>

<style lang="scss">
  @import './src/assets/scss/login/signin.scss'
</style>

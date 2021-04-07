<template lang="pug">
section.login.d-flex.justify-content-center.align-items-center
  .container.h-100
    .row
      .col-lg-6.pr-lg-0
        .login-image.h-100
          img(src='@/assets/images/photos/security.jpg').w-100.h-100(@click='landingPage')
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
      this.$alertify.warning('Verificando credenciales...');
      this.$store.dispatch('retreiveToken', {
        username: this.username,
        password: this.password
      }).then( response => {
        this.$alertify.success('Acceso autorizado');
        this.$router.push({ name: 'Dashboard' })
        return response
      }).catch( error => {
        console.log(`Error al actualizar categoria ${error}`)
        this.alertError( error.response.data )
        return error
      } )
    },
    landingPage() {
      this.$router.push('/')
    },
    alertError (errors) {
      let err = Object.entries(errors),
      errMessage = '<ul style="padding: 0; margin: 0;">'
      err.forEach(e => {
        errMessage += `<li>${e[0]} - ${e[1]}</li>`
      });
      errMessage += '</ul>'
      
      this.$alertify.alert('Ops, algo salio mal!!', errMessage , () =>
        this.$alertify.warning()
      );
    }
  }
}
</script>

<style lang="scss">
  @import './src/assets/scss/login/signin.scss'
</style>

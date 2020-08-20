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
            form
              input(id="email", name="email", placeholder="Correo electronico").form-control.bottom35
              input(type="password" id="password", name="password", placeholder="Contraseña").form-control.bottom35
              .gradient-button.d-flex.justify-content-center.align-items-center Iniciar sesión
</template>

<style lang="scss">
  @import './src/assets/scss/login/signin.scss'
</style>

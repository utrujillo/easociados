<template lang="pug">
section.contacto.d-flex.flex-column.justify-content-center.align-items-center.p-5
  h1.montserrat.white Contactanos
  h4.montserrat.white Contamos con un equipo de expertos que pueden ayudarte
  .formulario.d-flex.justify-content-around.flex-lg-row.flex-xl-row.flex-column
    form
      input(id="nombre", name="nombre", placeholder="Nombre").form-control.mt-4
      input(id="email", name="nombre", placeholder="Correo electronico").form-control.mt-3
      textarea(id="mensaje", name="mensaje", placeholder="Mensaje", rows="7").form-control.mt-3
      .gradient-button.d-flex.justify-content-center.align-items-center.mt-3 Enviar
    .indicaciones
      h5.purple.mt-4 Consultoría, mantenimiento y gestion ambiental
      h3.white Oficinas de Acapulco
      h6.white.fw-2.mt-3 Aquiles serdan No.21, despacho 130
      h6.white.fw-2 Colonia Centro
      h6.white.fw-2 Acapulco de Juarez, Guerrero
      h6.white.fw-2 CP. 39300
      h6.white.fw-2 Tel(s) 744-4450802, 744-1698893
      .contact-services.d-flex.justify-content-center.mt-3
        .icon-service
          img(src='@/assets/images/icons/facebook.png')
        .icon-service.ml-3
          img(src='@/assets/images/icons/whatsapp.png')
        .icon-service.ml-4
          img(src='@/assets/images/icons/email.png')
</template>

<script>
export default{
  name: 'Contacto'
}
</script>

<style lang="scss">
@import './src/assets/scss/index/contacto.scss'
</style>
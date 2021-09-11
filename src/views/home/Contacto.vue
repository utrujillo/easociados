<template lang="pug">
section#contacto.contacto.d-flex.flex-column.justify-content-center.align-items-center.p-5
  div(data-aos='flip-up' data-aos-duration='500')
    h1.montserrat.white Contáctanos
  div(data-aos='flip-up' data-aos-delay='200' data-aos-duration='500')
    h4.montserrat.white Contamos con un equipo de expertos que pueden ayudarte
  .container-fluid
    .row
      .col-xl-6.col-lg-6.col-md-12.col-sm-12
        .formulario.d-flex.justify-content-around.flex-lg-row.flex-xl-row.flex-column(data-aos='fade-right' data-aos-duration='500')
          form.w-100
            input(id="nombre", name="nombre", placeholder="Nombre").form-control.mt-4
            input(id="email", name="nombre", placeholder="Correo electronico").form-control.mt-3
            textarea(id="mensaje", name="mensaje", placeholder="Mensaje", rows="7").form-control.mt-3
            div(data-aos='fade-up' data-aos-delay='200' data-aos-duration='500')
              .gradient-button.d-flex.justify-content-center.align-items-center.mt-3 Enviar

      .col-xl-6.col-lg-6.col-md-12.col-sm-12(data-aos='fade-left' data-aos-duration='500')
        .indicaciones
          h5.purple.mt-4 Consultoría, Mantenimiento y Gestión Ambiental
          h3.white Oficinas de Acapulco
          h6.white.fw-2.mt-3 Aquiles Serdán No.21, Despacho 130
          h6.white.fw-2 Colonia Centro
          h6.white.fw-2 Acapulco de Juárez, Guerrero
          h6.white.fw-2 CP. 39300
          h6.white.fw-2 Tel(s) 
            //- a(href='whatsapp://tel:3216541234') llamar
            a(href='whatsapp://7442329235').white 744-2329235, 
            a(href='whatsapp://7441698893').white 744-1698893
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
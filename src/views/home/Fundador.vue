<template lang="pug">
section.fundador.d-flex.flex-xl-row.flex-lg-row.flex-md-row.flex-sm-column.flex-column.justify-content-center
  .f-left.align-self-center.d-flex
    .texto.align-self-center
      h1.montserrat.black.fw-2 Elí Olea Urioste
      h1.montserrat.green.fw-3.mt-3 Socio fundador
      p.gray.fw-2.text-justify.mt-4 Nacio en Atoyac de Álvarez, Estado de Guerrero, México, el 12 de junio de 1956.
      p.gray.fw-2.text-justify Profesor y Licenciado en Derecho por la Universidad Autónoma de Guerrero.
      p.gray.fw-2.text-justify Llevó a cabo sus estudios de Maestría en Administración en la Unidad de Estudios de Postgrado e Investigación en la misma institución. Cuenta con un Diplomado en Derecho Municipal y técnicas Lesgisilativas, en la Universidad Americada de Acapulco.
      .gradient-button.d-flex.justify-content-center 
        span.align-self-center Leer más
  .f-right.align-self-center.d-flex
    .circular-portrait
      img(src='@/assets/images/photos/eolea.jpg')

</template>

<script>
export default {
  name: 'Fundador'
}
</script>

<style lang='scss'>
  @import './src/assets/scss/index/fundador.scss'
</style>

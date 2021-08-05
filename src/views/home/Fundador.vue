<template lang="pug">
section#directivo.fundador.d-flex.flex-xl-row.flex-lg-row.flex-md-row.flex-sm-column.flex-column.justify-content-center
  .f-left.align-self-center.d-flex
    .texto.align-self-center
      div(data-aos='fade-right' data-aos-easing='ease-in-back' data-aos-delay='100' data-aos-duration='500')
        h1.montserrat.black.fw-2 Elí Olea Urioste
        h1.montserrat.green.fw-3.mt-3 Socio Fundador
        p.gray.fw-2.text-justify.mt-4 Nacio en Atoyac de Álvarez, Estado de Guerrero, México, el 12 de junio de 1956.
        p.gray.fw-2.text-justify Profesor y Licenciado en Derecho por la Universidad Autónoma de Guerrero.
        p.gray.fw-2.text-justify Llevó a cabo sus estudios de Maestría en Administración en la Unidad de Estudios de Postgrado e Investigación en la misma institución. Cuenta con un Diplomado en Derecho Municipal y Técnicas Lesgislativas, en la Universidad Americada de Acapulco.
        div(data-aos='fade-up' data-aos-delay='300' data-aos-duration='500')
          .gradient-button.d-flex.justify-content-center(@click='launchDirectivoModal')
            span.align-self-center Leer más
  .f-right.align-self-center.d-flex
    div(data-aos='fade-left' data-aos-duration='500')
      .circular-portrait
        img(src='@/assets/images/photos/eolea.jpg')
  
  #directivoModal.modal.fade(tabindex='-1' role='dialog', ref='modalDirectivo')
    .modal-dialog.modal-lg
      .modal-content.rounded-0
        .modal-header
          h5.modal-title Socio fundador
          button.close(type='button' data-dismiss='modal' aria-label='Close')
            span(aria-hidden='true') ×
        .modal-body
          | Enviar informacion que se debera mostrar en este apartado
          div.d-flex.justify-content-end
            button.btn.btn-info.rounded-0(type='button' data-dismiss='modal') Cerrar

</template>

<script>
import $ from 'jquery'

export default {
  name: 'Fundador',
  methods: {
    launchDirectivoModal() {
      $('#directivoModal').modal('show')
    }
  }
}
</script>

<style lang='scss'>
  @import './src/assets/scss/index/fundador.scss'
</style>

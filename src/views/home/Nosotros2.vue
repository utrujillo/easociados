<template lang="pug">
div
  //- Parte 2
  section.nosotros-2.d-flex.flex-column.flex-md-row.flex-lg-row.flex-xl-row.justify-content-center
    .us-left
      div(data-aos='fade-right' data-aos-duration='500')
        img(src='@/assets/images/photos/coffee.png').img-fluid
    .us-right.align-self-center
      div(data-aos='fade-left' data-aos-delay='200' data-aos-duration='500')
        h1.montserrat.fw-2.black Permítanos llevar su
        h1.montserrat
          span.fw-4.green Negocio
          span.fw-2  al siguiente nivel
      div(data-aos='fade-left' data-aos-delay='400' data-aos-duration='500')
        p.fw-2.gray.mt-4 Somos un grupo de profesionales con experiencia en la Administración 
          | Pública, Federal, Estatal y Municipal, quienes se han desempeñado en 
          | diversos puestos a nivel directivo y técnico, tanto en áreas de gobierno y
          | operativas, en Dependencias gubernamentales.
        .d-flex.justify-content-end.mr-md-5.mr-lg-5.mr-xl-5(data-aos='fade-up' data-aos-delay='700' data-aos-duration='500')
          .gradient-button.d-flex.justify-content-center(@click='launchNosotrosModal') 
            span.align-self-center Leer más
  //- Parte 3
  section.nosotros-3.d-flex.justify-content-center.align-items-center
    div(data-aos='flip-down' data-aos-duration='500')
      h1.montserrat.white.mb-0.text-center Más de 30 años de experiencia nos respaldan
  
  #nosotrosModal.modal.fade(tabindex='-1' role='dialog', ref='modalNosotros')
      .modal-dialog.modal-lg
        .modal-content.rounded-0
          .modal-header
            h5.modal-title Nosotros
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
  name: 'Nosotros2',
  methods: {
    launchNosotrosModal() {
      $('#nosotrosModal').modal('show')
    }
  }
}
</script>
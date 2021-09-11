<template lang="pug">
section#nosotros.nosotros.p-5.d-flex.flex-column.align-items-center
  div(data-aos='flip-up' data-aos-duration='500')
    h1.montserrat.purple Servicios que Ofertamos

  div.nosotros-text.montserrat.mt-4
    | EO&ASOCIADOS, está integrada por profesionistas de las distintas ramas de la ciencia, que tiene como fin ofrecer y proporcionar servicios profesionales de excelencia a los 3 niveles de gobierno, así como a  las personas físicas y morales del sector social, público y privado. 
  
  .d-flex.justify-content-end.mr-md-5.mr-lg-5.mr-xl-5(data-aos='fade-up' data-aos-delay='700' data-aos-duration='500')
    .gradient-button.d-flex.justify-content-center(@click='launchNosotrosModal') 
      span.align-self-center Leer más
  
  #nosotrosModal.modal.fade(tabindex='-1' role='dialog', ref='modalNosotros')
    .modal-dialog.modal-lg
      .modal-content.rounded-0
        .modal-header
          h5.modal-title Nosotros
          button.close(type='button' data-dismiss='modal' aria-label='Close')
            span(aria-hidden='true') ×
        .modal-body.p-4
          b Misión
          p.text-justify Crear, Promover y ejecutar programas y acciones institucionales, tendientes a la modernización y al fortalecimiento, propios de la Administración Pública. Impulsar el crecimiento de los sectores social y privado, ofreciendo ideas y soluciones innovadoras integrales que fortalezcan su competitividad y fomenten la inversión.
          
          b.mt-4 Visión
          p.text-justify Consolidar la participación de las empresas de consultoría en el desarrollo de la economía del país y en el fortalecimiento de la gestión gubernamental.
          p.text-justify Asegurar el desarrollo incluyente de todos los grupos sociales, en las actividades productivas y empresariales. 
          p.text-justify Ayudar a fomentar una nueva cultura empresarial, creando programas, herramientas e instrumentos de consultoría, asesoría, capacitación y sistemas de acceso a la información, así como el desarrollo y la innovación tecnológica orientando a sus clientes hacia la calidad total, productividad, permanencia y responsabilidad social

          
          div.d-flex.justify-content-end
            button.btn.btn-info.rounded-0(type='button' data-dismiss='modal') Cerrar
</template>

<script>
import $ from 'jquery'

export default{
  name: 'Nosotros',
  methods: {
    launchNosotrosModal() {
      $('#nosotrosModal').modal('show')
    }
  }
}
</script>

<style lang="scss">
@import './src/assets/scss/index/nosotros.scss'
</style>
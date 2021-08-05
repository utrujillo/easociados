<template lang="pug">
  section#inicio.banner
    .shape-layer.d-flex.flex-column.justify-content-center.align-items-center
      .banner-logo
        img(src='@/assets/images/icons/banner_logo.png').img-fluid

      h1.banner-title.mt-4 Consultoría, Mantenimiento y Gestoría Ambiental
      h3.banner-subtitle.mt-2 El mejor equipo de profesionales a tu disposición
      div(data-aos='zoom-in')
        .basic-button.mt-2(@click='launchBannerModal') Leer más
  
    #bannerModal.modal.fade(tabindex='-1' role='dialog', ref='modalBanner')
      .modal-dialog.modal-lg
        .modal-content.rounded-0
          .modal-header
            h5.modal-title EO & Asociados
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
  name: 'Banner',
  methods: {
    launchBannerModal() {
      $('#bannerModal').modal('show')
    }
  }
}
</script>

<style lang='scss'>
  @import './src/assets/scss/index/banner.scss'
</style>

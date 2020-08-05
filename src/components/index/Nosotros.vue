<template lang="pug">
section.nosotros
  //- Parte 1
  article.nosotros-1.d-flex.flex-column.justify-content-center.align-items-center
    h1.montserrat.white.text-center.margin-special Nuestro proceso de trabajo

    .timeline.mt-4.d-flex.flex-column.flex-md-row.flex-lg-row.flex-xl-row.justify-content-between
      .line
      .spot.mt-3.d-flex.justify-content-center.align-items-center.flex-column
        h1.montserrat.fw-6.white 01
        .description 
          p Conceptualización
          p.detail-description.fw-1 Platica con el cliente del proyecto
      
      .spot.mt-3.d-flex.justify-content-center.align-items-center
        h1.montserrat.fw-6.white 02
        .description
          p Plan estratégico
          p.detail-description.fw-1 Se elabora un plan que solucionará el problema del cliente
      .spot.mt-3.d-flex.justify-content-center.align-items-center
        h1.montserrat.fw-6.white 03
        .description
          p Desarrollo
          p.detail-description.fw-1 Se construye el plan diseñado
      .spot.mt-3.d-flex.justify-content-center.align-items-center
        h1.montserrat.fw-6.white 04
        .description
          p Retroalimentación
          p.detail-description.fw-1 El cliente da su punto de vista respecto a la solución
      .spot.mt-3.d-flex.justify-content-center.align-items-center
        h1.montserrat.fw-6.white 05
        .description
          p Control de calidad
          p.detail-description.fw-1 Revision de control de calidad respecto al plan diseñado
    
  //- Parte 2
  article.nosotros-2.d-flex.flex-column.flex-md-row.flex-lg-row.flex-xl-row.justify-content-center
    .us-left
      img(src='@/assets/images/photos/coffee.png').img-fluid
    .us-right.align-self-center
      h1.montserrat.fw-2.black Permítanos llevar su
      h1.montserrat
        span.fw-4.green Negocio
        span.fw-2  al siguiente nivel
      p.fw-2.gray.mt-4 Somos un grupo de profesionales con experiencia en la Administración 
        | Pública, Federal, Estatal y Municipal, quienes se han desempeñado en 
        | diversos puestos a nivel directivo y técnico, tanto en áreas de gobierno y
        | operativas, en Dependencias gubernamentales
      .d-flex.justify-content-end.mr-md-5.mr-lg-5.mr-xl-5
        .gradient-button.d-flex.justify-content-center 
          span.align-self-center Leer más
</template>

<script>
export default {
  name: 'Nosotros',
  data () {
    return {
      window: {
          width: 0,
          height: 0
      }
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;

      console.log( `width: ${window.innerWidth} height: ${window.innerHeight}` )
    }
  }
}
</script>

<style lang='scss'>
  @import './src/assets/scss/index/nosotros.scss'
</style>

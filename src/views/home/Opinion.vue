<template lang="pug">
section.opinion.pb-5
  article.bck-opinion
    .container-fluid
      div(data-aos='flip-down')
        h1.montserrat.white.pt-5.text-right Opiniones de nuestros clientes
  article
    .container-fluid.d-flex.justify-content-around.flex-md-row.flex-lg-row.flex-xl-row.flex-column
      div(data-aos='fade-right' data-aos-delay='200' data-aos-duration='500')
        .left-o.d-flex.justify-content-center.flex-column.align-items-center
          .opinion-image-outside.d-flex.justify-content-center.align-items-center
            .opinion-image-inside.d-flex.justify-content-center.align-items-center
              img(:src='parentData.opinion.foto | toDisplayImage' v-if="parentData.opinion.foto").img-fluid
              
          .opinion-text.d-flex.justify-content-between.align-items-center
            span
            .title-image.green {{ parentData.opinion.cliente }}
            span
      .right-o.d-flex.flex-column
        div(data-aos='fade-left' data-aos-delay='200' data-aos-duration='500')
          p.mt-5.gray.fw-2 "{{ parentData.opinion.descripcion }}".
          .stars.d-flex
            .star(v-for='i in parentData.opinion.calificacion')
</template>

<script>
export default{
  name: 'Opinion',
  props: { parentData: Object },
  filters: {
    toDisplayImage( img ){
      return `${process.env.VUE_APP_API_IMG}${img}`
    }
  },
}
</script>

<style lang="scss">
@import './src/assets/scss/index/opinion.scss'
</style>
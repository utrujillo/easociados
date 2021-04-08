<template lang="pug">
section#portafolio.portfolio
  h5.montserrat.text-center.purple Vamos a explorar
  h1.montserrat.text-center.black2 Nuestro portafolio
  .gallery-images
    ul.text-center.mt-3.mb-4.fw-2
      li.active(@click='filterDisplay("all")') Todos
      li(v-for='category in parentData.categories' @click='filterDisplay( category.id )') {{ category.nombre }}
    
    .images.mx-auto.d-flex.flex-wrap
      .image-content(v-for='image in fotos')
        img(:src='image | toDisplayImage' v-if="image").img-fluid
</template>

<script>
export default {
  name: 'Portafolio',
  props: { parentData: Object },
  data () {
    return {
      fotos: [],
      limit: 16
    }
  },
  mounted: function () {
    this.index()
  },
  filters: {
    toDisplayImage( img ){
      return `${process.env.VUE_APP_API_IMG}${img}`
    }
  },
  methods: {
    index () {
      this.getPictures( this.parentData.jobs )
    },
    filterDisplay ( id ) {
      if( id == 'all' ) {
        this.index()
      } else {
        let jobs = this.parentData.jobs.filter( item => item.category_id === id )
        this.getPictures( jobs )
      }
    },
    getPictures ( obj ) {
      this.fotos = []
      obj.forEach(job => {
        job.fotos.forEach(foto => {
          if( this.fotos.length < this.limit )
            this.fotos.push(foto)
        });
      });
    }
  }
}
</script>

<style lang='scss'>
  @import './src/assets/scss/index/portafolio.scss'
</style>
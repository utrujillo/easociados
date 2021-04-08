<template lang="pug">
section#servicios.services.d-flex.justify-content-center.flex-column
  div(data-aos='flip-up' data-aos-duration='500')
    h1.montserrat.purple Conoce nuestros servicios
  .squares.d-flex.justify-content-around.flex-lg-row.flex-xl-row.flex-column(v-for='obj in services')
    span(v-for='(category, index) in obj')
      div(data-aos='fade-right', data-aos-delay='300', data-aos-duration='1000', v-if='index == 0')
        ServiceDetail(:parentData='{category: category, jobs: category_jobs(category.id) }')
    
      div(data-aos='fade-up' data-aos-delay='100' data-aos-duration='1000', v-if='index == 1')
        ServiceDetail(:parentData='{category: category, jobs: category_jobs(category.id)} ')
      
      div(data-aos='fade-left' data-aos-delay='300' data-aos-duration='1000', v-if='index == 2')
        ServiceDetail(:parentData='{category: category, jobs: category_jobs(category.id)} ')
</template>

<script>
import ServiceDetail from './servicios/ServiceDetail'

export default {
  name: 'Servicios',
  props: { parentData: Object },
  components: { ServiceDetail },
  data () {
    return {
      services: [],
      colElements: 3
    }
  },
  mounted: function () {
    this.index()
  },
  methods: {
    index () {
      this.services = this.parentData.categories.reduce((r, e, i) =>
          (i % this.colElements ? r[r.length - 1].push(e) : r.push([e])) && r
      , []);
    },
    category_jobs ( id ) {
      return this.parentData.jobs.filter( item => item.category_id === id )
    }
  }
}
</script>

<style lang='scss'>
  @import './src/assets/scss/index/servicios.scss'
</style>
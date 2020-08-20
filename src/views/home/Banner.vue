<template lang="pug">
  section.banner
    .shape-layer.d-flex.flex-column.justify-content-center.align-items-center
      .banner-logo
          img(src='@/assets/images/icons/banner_logo.png').img-fluid
        
      h1.banner-title.mt-4 Consultoría, mantenimiento y Gestoría ambiental
      h3.banner-subtitle.mt-2 El mejor equipo de profesionales a tu disposición
      .basic-button.mt-2 Leer más
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style lang='scss'>
  @import './src/assets/scss/index/banner.scss'
</style>

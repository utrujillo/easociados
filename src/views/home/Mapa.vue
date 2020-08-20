<template lang="pug">
#map
  iframe#gmap_canvas(src='https://maps.google.com/maps?q=aquiles%20serdan%20No.%2021&t=&z=15&ie=UTF8&iwloc=&output=embed', scrolling='no', marginheight='0', marginwidth='0', frameborder='0')
</template>

<script>
export default {
  name: 'Mapa'
}
</script>

<style lang="scss">
#map{
  width: 100%;
  height: 400px;
  background: firebrick;
  overflow: hidden;
  iframe{
    width: 100%;
    height: 100%;
  }
}
</style>
<template lang="pug">
  #app
    Banner
    Navbar
</template>

<script>
import Banner from './components/index/Banner.vue'
import Navbar from './components/index/Navbar.vue'

export default {
  name: 'App',
  components: {
    Banner,
    Navbar
  }
}
</script>

<style>
</style>

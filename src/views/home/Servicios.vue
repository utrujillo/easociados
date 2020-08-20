<template lang="pug">
section.services.d-flex.justify-content-center.flex-column
  h1.montserrat.purple Conoce nuestros servicios
  .squares.d-flex.justify-content-around.flex-lg-row.flex-xl-row.flex-column
    .square.my-1
      .square-header.d-flex.justify-content-center.align-items-center
        p.montserrat.fw-3.m-0 Consultoría gubernamental
      div.division-line
      .square-body.py-4.pr-2
        ul.fw-3
          li Procesos de entrega - recepción
          li Libros blancos o memorías documentales
          li Reglamentos organicos e interiores
          li Rediseño y optimización de estructuras
          li Procesos
          li Manuales de organización y procedimientos
          li Procesos de planeación pública
    
    .square.my-1
      .square-header.d-flex.justify-content-center.align-items-center
        p.montserrat.fw-3.m-0 Tecnología de la información para el gobierno
      div.division-line
      .square-body.py-4.pr-2
        ul.fw-3
          li Mejora de procesos
          li Atención ciudadana
          li Creación de portales institucionales
          li Evaluaución de portales institucionales
    
    .square.my-1
      .square-header.d-flex.justify-content-center.align-items-center
        p.montserrat.fw-3.m-0 Construcciones, mantenimiento y gestoría ambiental
      div.division-line
      .square-body.py-4.pr-2
        ul.fw-3
          li Construcciones en general
          li Herreria en general
          li Poda y derribo de arboles
          li Implementación de inmuebles
          li Pintura de casa y edificios en general
          li Fumigación para el control de plagas urbanas
          li Diseño, construcción y mantenimiento de jardinería
          li Limpieza general de calles, parques, jardínes y espacios públicos
</template>

<script>
export default {
  name: 'Servicios',
}
</script>

<style lang='scss'>
  @import './src/assets/scss/index/servicios.scss'
</style>
<template lang="pug">
div
  //- Parte 2
  section.nosotros-2.d-flex.flex-column.flex-md-row.flex-lg-row.flex-xl-row.justify-content-center
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
        | operativas, en Dependencias gubernamentales.
      .d-flex.justify-content-end.mr-md-5.mr-lg-5.mr-xl-5
        .gradient-button.d-flex.justify-content-center 
          span.align-self-center Leer más
  //- Parte 3
  section.nosotros-3.d-flex.justify-content-center.align-items-center
    h1.montserrat.white.mb-0.text-center Más de 10 años de experiencia nos respaldan
</template>

<script>
export default {
  name: 'Nosotros2'
}
</script>
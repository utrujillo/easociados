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
              img(src='@/assets/images/photos/escudo.png').img-fluid
          .opinion-text.d-flex.justify-content-between.align-items-center
            .arrow-left.d-flex.justify-content-center.align-items-center
              img(src='@/assets/images/icons/arrow-left.png').img-fluid
            .title-image.green H. Ayuntamiento del municipio de Coyuca de Benitez
            .arrow-right.d-flex.justify-content-center.align-items-center
              img(src='@/assets/images/icons/arrow-right.png').img-fluid
      .right-o.d-flex.flex-column
        div(data-aos='fade-left' data-aos-delay='200' data-aos-duration='500')
          p.mt-5.gray.fw-2 "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
            | has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            | of type and scrambled it to make a type specimen book.".
          .stars.d-flex
            .star
            .star
            .star
            .star
            .star
</template>

<script>
export default{
  name: 'Opinion'
}
</script>

<style lang="scss">
@import './src/assets/scss/index/opinion.scss'
</style>
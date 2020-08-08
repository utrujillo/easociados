<template lang="pug">
.footer.d-flex.align-items-center
  .container-fluid.d-flex.justify-content-between.flex-md-row.flex-lg-row.flex-xl-row.flex-column
    .f-left.d-flex.align-items-center.flex-column
      h5.montserrat.white Días laborales
      p.fw-1.white Lunes a viernes ..... 8:00 - 17:00 hrs
      p.fw-1.white.mb-0 Sabados ................... 8:00 - 14:00 hrs
    .f-right.d-flex.justify-content-center.flex-column.align-items-center
      .footer-logo
      p.fw-1.white.mb-0 El mejor equipo de profesionales a tu disposición

</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer{
  padding: 15px 0;
  width: 100%;
  min-height: 130px;
  background: #26313C;
  .f-left{
    width: 300px;
  }
  .f-right{
    width: 400px;
    .footer-logo{
      width: 235px;
      height: 50px;
      background: url('~@/assets/images/icons/banner_logo.png') center center no-repeat;
      background-size: contain;
    }
  }
}

/* 
  ? Sirve para reajustar de manera responsiva el pie de pagina
 */
 @media screen and (max-width: 964px) {
  .footer{
    .f-left, .f-right{
      width: 100%;
    }
  }
}
</style>
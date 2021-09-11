<template lang="pug">
div
  //- Parte 2
  section.estrategia-2.d-flex.flex-column.flex-md-row.flex-lg-row.flex-xl-row.justify-content-center
    .us-left
      div(data-aos='fade-right' data-aos-duration='500')
        img(src='@/assets/images/photos/coffee.png').img-fluid
    .us-right.align-self-center
      div(data-aos='fade-left' data-aos-delay='200' data-aos-duration='500')
        h1.montserrat.fw-2.black Permítanos llevar su
        h1.montserrat
          span.fw-4.green Negocio
          span.fw-2  al siguiente nivel
      div(data-aos='fade-left' data-aos-delay='400' data-aos-duration='500')
        p.fw-2.gray.mt-4 Tenemos una extensa oferta de servicios que responde a las demandas más 
          | actuales de todas las áreas funcionales de las organizaciones, en general, y de las 
          | personas, en lo particular, que tengan inquietudes de progreso y desarrollo. 
        .d-flex.justify-content-end.mr-md-5.mr-lg-5.mr-xl-5(data-aos='fade-up' data-aos-delay='700' data-aos-duration='500')
          .gradient-button.d-flex.justify-content-center(@click='launchEstrategiaModal') 
            span.align-self-center Leer más
  //- Parte 3
  section.estrategia-3.d-flex.justify-content-center.align-items-center
    div(data-aos='flip-down' data-aos-duration='500')
      h1.montserrat.white.mb-0.text-center Más de 30 años de experiencia nos respaldan
  
  #estrategiaModal.modal.fade(tabindex='-1' role='dialog', ref='modalEstrategia')
      .modal-dialog.modal-lg
        .modal-content.rounded-0
          .modal-header
            h5.modal-title NOS ESPECIALIZAMOS EN LAS SIGUIENTES ÁREAS FORMATIVAS
            button.close(type='button' data-dismiss='modal' aria-label='Close')
              span(aria-hidden='true') ×
          .modal-body.p-4
            b CULTURA ORGANIZACIONAL
            p.text-justify El desarrollo de la cultura organizacional permite a los integrantes de la organización ciertas conductas e inhiben otras. Una cultura laboral abierta y humana alienta la participación y conducta madura de todos los miembros de la organización, sí las personas se comprometen y son responsables, se debe a que la cultura laboral se lo permite Es una fortaleza que encamina a las organizaciones hacia la excelencia, hacia el éxito. Este término fue definido por otros investigadores del tema como la interacción de valores, actitudes y conductas compartidas por todos los miembros de una empresa u organización.
            
            b.mt-4 MOTIVACIÓN PERSONAL
            p.text-justify La motivación es un impulso interno del ser humano que le lleva a actuar para satisfacer sus necesidades. Querer ser mejor es algo latente en todos los seres humanos, la forma en que cada uno percibe lo que significa ser mejor depende del componente de motivación que tenga, para las personas más mentales ser mejor significa un mejoramiento personal; para las personas más emocionales, ser mejor significa un mejoramiento trascendental; para las personas más orgánicas, ser mejor significa un mejoramiento material externo

            b.mt-4 TÉCNICAS DE VENTAS
            p.text-justify Vender es la actividad fundamental de las empresas, organizaciones o personas que ofrecen algo (productos, servicios u otros) en su mercado meta. Saber vender un producto o servicio, a cualquier tipo de cliente, requiere un conocimiento profundo de las motivaciones de compra y de venta. Por ello, es imprescindible que todas las personas que están involucradas en actividades de mercadotecnia y en especial, de venta y estudios de mercado, para que se conviertan en expertos de las técnicas de ventas. Nosotros le ayudamos a lograrlo.
            
            div.d-flex.justify-content-end
              button.btn.btn-info.rounded-0(type='button' data-dismiss='modal') Cerrar
</template>

<script>
import $ from 'jquery'

export default {
  name: 'Estrategia2',
  methods: {
    launchEstrategiaModal() {
      $('#estrategiaModal').modal('show')
    }
  }
}
</script>
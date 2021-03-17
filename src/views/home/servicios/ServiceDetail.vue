<template lang="pug">
.square.my-1
  .square-header.d-flex.justify-content-center.align-items-center
    p.montserrat.fw-3.m-0 {{ parentData.category.nombre }}
  div.division-line
  .square-body.py-4.pr-2
    ul.fw-3
      li(v-for='job in parentData.jobs') {{ job.nombre }}
</template>

<script>
export default {
  name: 'ServiceDetail',
  props: { parentData: Object },
}
</script>
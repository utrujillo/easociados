<template lang="pug">
.row
  .col-12.p-2
    .card
      .card-header.bg-info
        span.text-white Trabajos
      .card-body
        .form-group
          select(id="categoria", name="categoria", v-model='job.category_id').form-control
        .form-group
          input(id="nombre", name="nombre", placeholder="Nombre" v-model='job.nombre').form-control
        .form-group
          textarea(id="descripcion", name="descripcion", placeholder="Descripcion" v-model='job.descripcion').form-control
        .btn.btn-primary.btn-block(v-on:click='guardar') Crear
</template>

<script>
export default {
  name: 'Trabajos',
  data () {
    return {
      job: {
        category_id: 0,
        nombre: '',
        descripcion: ''
      }
    }
  },
  methods: {
    guardar: function() {
      console.log( `Nombre: ${this.job.nombre} Descripcion: ${this.job.descripcion}` )
    }
  }
}
</script>

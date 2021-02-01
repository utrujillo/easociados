<template lang="pug">
.row
  .p-2.col-lg-4.col-md-4.col-sm-6.col-xs-12
    .card
      .card-header.bg-info
        span.text-white Trabajos
      .card-body
        .form-group
          select(id="categoria", name="categoria", v-model='job.category_id').form-control
            option(value="0") - Seleccionar -
            option(v-for='c in categories' v-bind:key='c.id' v-bind:value='c.id') {{ c.nombre }}
        .form-group
          input(id="nombre", name="nombre", placeholder="Nombre" v-model='job.nombre').form-control
        .form-group
          textarea(id="descripcion", name="descripcion", placeholder="Descripcion" v-model='job.descripcion').form-control
        .btn.btn-primary.btn-block(v-on:click='create') Crear
  .p-2.col-lg-8.col-md-8.col-sm-6.col-xs-12
    .card
      .card-header.bg-secondary
        span.text-white Listado de trabajos
      .card-body
        table.table
          thead.thead-dark
            tr
              th(width="50") &nbsp;
              th(width="180") Categoría
              th Trabajo
              th Descripción
          tbody
            tr(v-for='job in jobs')
              td.d-flex.justify-content-center 
                fas(icon='pen', v-if='!job.editar').green.mr-2(@click="job.editar = true")
                fas(icon='times', v-if='job.editar', @click="job.editar = false").orange.mr-2
                fas(icon='trash').red(@click="destroy(job.id)")
              td
                span {{ job.category.nombre }}
              td 
                input(v-if='job.editar', v-model='job.nombre', @keyup.enter='update(job)').form-control
                span(v-else) {{ job.nombre }}
              td 
                input(v-if='job.editar', v-model='job.descripcion', rows="1", @keyup.enter='update(job)').form-control
                span(v-else) {{ job.descripcion }}
</template>

<script>
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/api'

export default {
  name: 'Trabajos',
  data () {
    return {
      categories: [],
      jobs: [],
      job: {
        category_id: 0,
        nombre: '',
        descripcion: '',
        editar: ''
      }
    }
  },
  // Hooks
  mounted: function () {
    this.index()
  },
  methods: {
    index: function() {
      // Obtener categorias
      axios.get('/v1/categories').then(response => {
        this.categories = response.data
      }).catch(error => {
        console.log(`Error al leer categorias ${error}`)
      })
      // Obtener trabajos
      axios.get('/v1/jobs').then(response => {
        this.jobs = response.data
      }).catch(error => {
        console.log(`Error al leer los trabajos ${error}`)
      })
    },
    create: function() {
      axios.post('/v1/jobs', this.job )
        .then(response => {
          let status = response.status
          if( status == 201 ){
            this.index()
            this.job = {
              category_id: 0,
              nombre: '',
              descripcion: '',
              editar: ''
            }
          }
        }).catch(error => {
          console.log(`Error al crear el trabajo ${error}`)
        })
    },
    destroy: function (id) {
      axios.delete(`/v1/jobs/${id}`).then(response => {
        let status = response.status
        if( status == 204 )
          this.index()
      }).catch(error => {
        console.log(`Error al eliminar el trabajo ${error}`)
      })
    },
    update: function (item) {
      let job = { 
                  "job": { category_id: item.category.id, id: item.id, nombre: item.nombre, descripcion: item.descripcion, editar: false }
                }
      axios.patch(`/v1/jobs/${item.id}`, job).then(response => {
        let status = response.status
        if( status == 200 )
          this.index()
      }).catch(error => {
        console.log(`Error al actualizar el trabajo ${error}`)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.svg-inline--fa:hover{
  cursor: pointer;
}
</style>
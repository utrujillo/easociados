<template lang="pug">
.row
  .p-2.col-lg-4.col-md-4.col-sm-6.col-xs-12
    .card
      .card-header.bg-info
        span.text-white Nueva categoría
      .card-body
        form(action='#')
          .form-group
            input(id="nombre", name="nombre", placeholder="Nombre" v-model='category.nombre').form-control
          .form-group
            textarea(id="descripcion", name="descripcion", placeholder="Descripcion" v-model='category.descripcion').form-control
          .btn.btn-primary.btn-block(@click='create') Crear
  
  .p-2.col-lg-8.col-md-8.col-sm-6.col-xs-12
    .card
      .card-header.bg-secondary
        span.text-white Listado de categorias
      .card-body
        table.table
          thead.thead-dark
            tr
              th(width="50") &nbsp;
              th(width="400") Categoría
              th Descripción
          tbody
            tr(v-for='category in categories')
              td.d-flex.justify-content-center 
                fas(icon='pen', v-if='!category.editar').green.mr-2(@click="category.editar = true")
                fas(icon='times', v-if='category.editar', @click="category.editar = false").orange.mr-2
                fas(icon='trash').red(@click="destroy(category.id)")
              td 
                
                input(v-if='category.editar', v-model='category.nombre', @keyup.enter='update(category)').form-control
                span(v-else) {{ category.nombre }}
              td 
                input(v-if='category.editar', v-model='category.descripcion', rows="1", @keyup.enter='update(category)').form-control
                span(v-else) {{ category.descripcion }}
                
        
</template>

<script>
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/api'

export default {
  name: 'Categorias',
  data() {
    return {
      categories: [],
      category: {
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
      axios.get('/v1/categories').then(response => {
        this.categories = response.data
      }).catch(error => {
        console.log(`Error al leer categorias ${error}`)
      })  
    },
    create: function() {
      axios.post('/v1/categories', this.category )
        .then(response => {
          let status = response.status
          if( status == 201 ){
            this.index()
            this.category = {
              nombre: '',
              descripcion: '',
              editar: ''
            }
          }
        }).catch(error => {
          console.log(`Error al crear categoria ${error}`)
        })     
    },
    destroy: function (id) {
      axios.delete(`/v1/categories/${id}`).then(response => {
        let status = response.status
        if( status == 204 )
          this.index()
      }).catch(error => {
        console.log(`Error al crear categoria ${error}`)
      })
    },
    update: function (item) {
      let category = { 
                      "category": { id: item.id, nombre: item.nombre, descripcion: item.descripcion, editar: false }
                    }
      axios.patch(`/v1/categories/${item.id}`, category).then(response => {
        let status = response.status
        if( status == 200 )
          this.index()
      }).catch(error => {
        console.log(`Error al crear categoria ${error}`)
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

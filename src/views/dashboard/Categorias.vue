<template lang="pug">
.loader(v-if='loading') 
  .textoloader 
    h5 Procesando información
div(v-else='')
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
export default {
  name: 'Categorias',
  data() {
    return {
      categories: [],
      loading: false,
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
    defaultData: function () {
      this.category = {
              nombre: '',
              descripcion: '',
              editar: ''
            }
      this.index()
    },
    index: function() {
      this.$http.get('/v1/categories').then(response => {
        this.categories = response.data.map( o => ({...o, editar: false }) )
        this.loading = false
      }).catch(error => {
        console.log(`Error al leer categorias ${error}`)
        this.loading = false
      })  
    },
    create: function() {
      this.loading = true
      this.$http.post('/v1/categories', this.category, {
        headers: {
          'Authorization': `Berear ${this.$store.state.token}`
        }
      } )
      .then(response => {
        let status = response.status
        if( status == 201 ){
          this.defaultData()
        }
        this.loading = false
      }).catch(error => {
        console.log(`Error al crear categoria ${error}`)
        this.loading = false
      })
    },
    destroy: function (id) {
      this.loading = true
      this.$http.delete(`/v1/categories/${id}`, {
        headers: {
          'Authorization': `Berear ${this.$store.state.token}`
        }
      }).then(response => {
        let status = response.status
        if( status == 200 )
          this.defaultData()
        
        this.loading = false
      }).catch(error => {
        console.log(`Error al eliminar categoria ${error}`)
        this.loading = false
      })
    },
    update: function (item) {
      this.loading = true
      let category = { 
                      "category": { id: item.id, nombre: item.nombre, descripcion: item.descripcion, editar: false }
                    }
      this.$http.patch(`/v1/categories/${item.id}`, category, {
        headers: {
          'Authorization': `Berear ${this.$store.state.token}`
        }
      }).then(response => {
        let status = response.status
        if( status == 200 )
          this.index()
        this.loading = false
      }).catch(error => {
        console.log(`Error al actualizar categoria ${error}`)
        this.loading = false
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

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
                  fas.green.mr-2(icon='pen', v-if='!category.editar', @click="category.editar = true", :title="`${category.id}`")
                  fas.orange.mr-2(icon='times', v-if='category.editar', @click="category.editar = false", :title="`${category.id}`")
                  fas.red(icon='trash', @click="modalDelete(category)", :title="`${category.id}`")
                td 
                  input(v-if='category.editar', v-model='category.nombre', @keyup.enter='update(category)').form-control
                  span(v-else) {{ category.nombre }}
                td 
                  input(v-if='category.editar', v-model='category.descripcion', rows="1", @keyup.enter='update(category)').form-control
                  span(v-else) {{ category.descripcion }}
  
  //- Delete modal
  #modalDelete.modal.fade(tabindex='-1' role='dialog', ref='modalDelete')
    .modal-dialog
      .modal-content
        .modal-header.bg-danger.text-white
          h5.modal-title Eliminacion de categoria
          button.close(type='button' data-dismiss='modal' aria-label='Close')
            span.text-white(@click='defaultData') ×
        .modal-body
          .row
            .col-12
              p Estas completamente seguro de querer la siguiente categoria?
              b {{ itemToDelete.nombre }}
              p.text-right.text-danger.fs-small * Al eliminar la categoria se eliminaran todos los trabajos vinculados dicha categoria
        .modal-footer
          button.btn.btn-danger(type='button' data-dismiss='modal', @click='defaultData') Cerrar
          button.btn.btn-primary(type='button', @click='destroy') Eliminar
</template>

<script>
import $ from 'jquery'

export default {
  name: 'Categorias',
  data() {
    return {
      categories: [],
      loading: false,
      itemToDelete: {},
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
      this.itemToDelete = {}
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
        this.$alertify.success('Categoria creada satisfactoriamente');
      }).catch(error => {
        console.log(`Error al crear categoria ${error}`)
        this.alertError( error.response.data )
        this.loading = false
      })
    },
    modalDelete (category) {
      this.itemToDelete = category
      $('#modalDelete').modal('show')
    },
    destroy: function () {
      this.$http.delete(`/v1/categories/${this.itemToDelete.id}`, {
        headers: {
          'Authorization': `Berear ${this.$store.state.token}`
        }
      }).then(response => {
        let status = response.status
        if( status == 200 )
          this.defaultData()
        
        $('#modalDelete').modal('hide')
        this.$alertify.success('Categoria eliminada satisfactoriamente');
      }).catch(error => {
        console.log(`Error al eliminar categoria ${error}`)
        this.alertError( error.response.data )
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
        this.$alertify.success('Categoria actualizada satisfactoriamente')
      }).catch(error => {
        console.log(`Error al actualizar categoria ${error}`)
        this.alertError( error.response.data )
        this.loading = false
      })
    },
    alertError (errors) {
      let err = Object.entries(errors),
      errMessage = '<ul style="padding: 0; margin: 0;">'
      err.forEach(e => {
        errMessage += `<li>${e[0]} - ${e[1]}</li>`
      });
      errMessage += '</ul>'
      
      this.$alertify.alert('Ops, algo salio mal!!', errMessage , () =>
        this.$alertify.warning()
      );
    }
  }
}
</script>

<style lang="scss" scoped>
.svg-inline--fa:hover{
  cursor: pointer;
}
</style>

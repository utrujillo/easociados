<template lang="pug">
.loader(v-if='loading') 
  .textoloader 
    h5 Procesando información
div(v-else='')
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
                  fas.green.mr-1(icon='pen', v-if='!job.editar', @click="job.editar = true", :title="`${job.id}`")
                  fas.orange.mr-1(icon='times', v-if='job.editar', @click="job.editar = false", :title="`${job.id}`")
                  fas.purple.mr-1(icon='image', @click='edit(job)', :title="`${job.id}`")
                  fas.red(icon='trash', @click="destroy(job.id)", :title="`${job.id}`")
                td
                  span {{ job.category.nombre }}
                td 
                  input(v-if='job.editar', v-model='job.nombre', @keyup.enter='update(job)').form-control
                  span(v-else) {{ job.nombre }}
                td 
                  input(v-if='job.editar', v-model='job.descripcion', rows="1", @keyup.enter='update(job)').form-control
                  span(v-else) {{ job.descripcion }}
  
  #uploadJobImage.modal.fade(tabindex='-1' role='dialog', ref='modalUpload')
    .modal-dialog.modal-lg
      .modal-content
        .modal-header
          h5.modal-title Agregar imagenes
          button.close(type='button' data-dismiss='modal' aria-label='Close')
            span(aria-hidden='true') ×
        .modal-body
          input.form-control-file(type='file', id='fotos', ref="fotos", @change="handleFileUpload()", multiple)
          .row.mt-3
            .col-sm-12.d-flex
              div.container-img.d-flex.align-items-center(v-for='image in images')
                img.img-thumbnail(:src='image | toDisplayImage' class='img-fluid' v-if="image")
            
        .modal-footer
          button.btn.btn-danger(type='button' data-dismiss='modal') Cerrar
          button.btn.btn-primary(type='button', @click='uploadImage') Guardar

</template>

<script>
import $ from 'jquery'

export default {
  name: 'Trabajos',
  data () {
    return {
      categories: [],
      loading: false,
      jobs: [],
      job: {
        category_id: 0,
        nombre: '',
        descripcion: '',
        editar: '',
        fotos: []
      },
      jobToUpdate: {},
      images: []
    }
  },
  // Hooks
  mounted: function () {
    this.index()
  },
  filters: {
    toDisplayImage( img ){
      return `${process.env.VUE_APP_API_IMG}${img}`
    }
  },
  methods: {
    defaultData: function (){
      this.job = {
              category_id: 0,
              nombre: '',
              descripcion: '',
              editar: ''
            }
      this.index()
    },
    index: function() {
      this.loading = true
      // Obtener categorias
      const reqCategory = this.$http.get('/v1/categories')
      const reqJob      = this.$http.get('/v1/jobs')
      
      this.$http.all([reqCategory, reqJob])
      .then(this.$http.spread((...responses) => {
        // Mostrando las opciones del catalogo dependiendo de la vista
        this.categories = responses[0].data
        this.jobs       = responses[1].data.map( o => ({...o, editar: false }) )
        this.loading         = false
      })).catch(errors => {
        // Lanzar toast
        console.log(`Error al leer la informacion ${errors}`)
        this.loading = false
      })
    },
    create: function() {
      let formData = new FormData()
      formData.append( 'category_id', this.job.category_id )
      formData.append( 'nombre', this.job.nombre )
      formData.append( 'descripcion', this.job.descripcion )
      // Peticion
      this.$http.post( '/v1/jobs', formData, {
          headers: {
            'Authorization': `Berear ${this.$store.state.token}`
          }
        })
        .then(response => {
          if( response.status == 201 )
            this.defaultData()
        }).catch(error => {
          console.log(`Error al crear el trabajo ${error}`)
        })
    },
    update: function (item) {
      let formData = new FormData()
      formData.append( 'category_id', item.category.id )
      formData.append( 'nombre', item.nombre )
      formData.append( 'descripcion', item.descripcion )
      // Peticion
      this.$http.patch(`/v1/jobs/${item.id}`, formData, {
        headers: {
          'Authorization': `Berear ${this.$store.state.token}`
        }
      }).then(response => {
        let status = response.status
        if( status == 200 )
          this.index()
      }).catch(error => {
        console.log(`Error al actualizar el trabajo ${error}`)
      })
    },
    edit: function (item) {
      this.jobToUpdate = { id: item.id }
      this.images = item.fotos
      $('#uploadJobImage').modal('show')
    },
    destroy: function (id) {
      this.$http.delete(`/v1/jobs/${id}`, {
        headers: {
          'Authorization': `Berear ${this.$store.state.token}`
        }
      }).then(response => {
        let status = response.status
        if( status == 200 )
          this.index()
      }).catch(error => {
        console.log(`Error al eliminar el trabajo ${error}`)
      })
    },
    handleFileUpload: function () {
      this.jobToUpdate.fotos = this.$refs.fotos.files;
    },
    uploadImage: function () {
      let formData = new FormData()
      this.jobToUpdate.fotos.forEach( foto => {
        formData.append( 'fotos[]', foto )
      })

      this.$http.patch(`/v1/jobs/${this.jobToUpdate.id}`, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
          'Authorization': `Berear ${this.$store.state.token}`
        }
      }).then(response => {
        if( response.status == 200 ){
          this.index()
          $('#uploadJobImage').modal('hide')
        }
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
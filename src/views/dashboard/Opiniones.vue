<template lang="pug">
.loader(v-if='loading') 
  .textoloader 
    h5 Procesando información
div(v-else='')
  .row
    .p-2.col-lg-4.col-md-4.col-sm-6.col-xs-12
      .card
        .card-header.bg-info
          span.text-white Opiniones
        .card-body
          .form-group
            input(id="cliente", name="cliente", placeholder="cliente" v-model='opinion.cliente').form-control
          .form-group
            textarea(cols='4', id="descripcion", name="descripcion", placeholder="Opinion del cliente" v-model='opinion.descripcion').form-control
          .form-group
            label Calificacion
              span.text-danger.ml-1 {{ opinion.calificacion }}
              span.ml-1 (No. de estrellas)
            input(type='range', min='1', max='5', list='tickmarks', id="calificacion", name="calificacion", v-model='opinion.calificacion').form-control
          .form-group
            input.form-control-file(type='file', id='foto', ref="foto", @change="handleFileUpload()")
          .btn.btn-primary.btn-block(v-on:click='create') Crear
    .p-2.col-lg-8.col-md-8.col-sm-6.col-xs-12
      .card
        .card-header.bg-secondary
          span.text-white Listado de opiniones
        .card-body
          .table-responsive
            table.table
              thead.thead-dark
                tr
                  th(width="50") &nbsp;
                  th(width="65") Imagen
                  th(width="180") Cliente
                  th Descripcion
                  th Calificacion
              tbody
                tr(v-for='op in opinions')
                  td.d-flex.justify-content-center 
                    fas.green.mr-1(icon='pen', v-if='!op.editar', @click="op.editar = true", :title="`${op.id}`")
                    fas.orange.mr-1(icon='times', v-if='op.editar', @click="op.editar = false", :title="`${op.id}`")
                    //- fas.purple.mr-1(icon='image', @click='edit(op)', :title="`${op.id}`")
                    fas.red(icon='trash', @click="destroy(op.id)", :title="`${op.id}`")
                  td
                    .img-content
                      img(:src='op.foto | toDisplayImage' v-if="op.foto").img-fluid.img-thumbnail
                  td
                    input(v-if='op.editar', v-model='op.cliente', @keyup.enter='update(op)').form-control
                    span(v-else) {{ op.cliente }}
                  td 
                    textarea(v-if='op.editar', v-model='op.descripcion', rows="3", @keyup.enter='update(op)').form-control
                    span(v-else) {{ op.descripcion }}
                  td.text-center 
                    input(v-if='op.editar', type='range', min='1', max='5', list='tickmarks', id="calificacion", name="calificacion", v-model='op.calificacion',  @change='update(op)').form-control
                    span(v-else) {{ op.calificacion }}
</template>

<script>
export default {
  name: 'Opiniones',
  data () {
    return {
      loading: true,
      opinions: [],
      opinion: {
        cliente: '',
        descripcion: '',
        calificacion: 3,
        foto: ''
      }
    }
  },
  mounted: function () {
    this.index()
  },
  filters: {
    toDisplayImage( img ){
      return `${process.env.VUE_APP_API_IMG}${img}`
    }
  },
  methods: {
    defaultData() {
      this.opinion = {
              cliente: '',
              descripcion: '',
              calificacion: 3,
              foto: ''
            }
      this.index()
    },
    index() {
      this.loading = true
      this.$http.get( '/v1/opinions', {
          headers: {
            'Authorization': `Berear ${this.$store.state.token}`
          }
        })
        .then(response => {
          this.opinions = response.data.map( o => ({...o, editar: false }) )
          this.loading = false
        }).catch(error => {
          console.log(`Error al leer opiniones ${error}`)
          this.loading = false
        })
    },
    handleFileUpload: function () {
      this.opinion.foto = this.$refs.foto.files;
    },
    create () {
      this.loading = true
      let formData = new FormData()
      formData.append( 'cliente', this.opinion.cliente )
      formData.append( 'descripcion', this.opinion.descripcion )
      formData.append( 'calificacion', this.opinion.calificacion )
      formData.append( 'foto', this.opinion.foto[0] )
      
      // Peticion
      this.$http.post( '/v1/opinions', formData, {
          headers: {
            'Content-type': 'multipart/form-data',
            'Authorization': `Berear ${this.$store.state.token}`
          }
        })
        .then(response => {
          if( response.status == 201 )
            this.defaultData()
          this.$alertify.success('Opinion creada satisfactoriamente');
          this.loading = false
        }).catch(error => {
          console.log(`Error al crear el trabajo ${error}`)
          this.alertError( error.response.data )
          this.loading = false
        })
    },
    update ( opinion ) {
      this.loading = true
      let toUpdate = {
        cliente: opinion.cliente,
        descripcion: opinion.descripcion,
        calificacion: opinion.calificacion
      }
      
      this.$http.patch(`/v1/opinions/${opinion.id}`, toUpdate, {
        headers: {
          'Authorization': `Berear ${this.$store.state.token}`
        }
      }).then(response => {
        if( response.status == 200 )
          this.defaultData()
        this.loading = false
        this.$alertify.success('Opinion actualizada satisfactoriamente');
      }).catch(error => {
        console.log(`Error al actualizar el trabajo ${error}`)
        this.alertError( error.response.data )
        this.loading = false
      })
    },
    destroy (id) {
      this.loading = true
      this.$http.delete(`/v1/opinions/${id}`, {
        headers: {
          'Authorization': `Berear ${this.$store.state.token}`
        }
      }).then(response => {
        let status = response.status
        if( status == 204 )
          this.defaultData()
        this.loading = false
        this.$alertify.warning('Opinion eliminada satisfactoriamente');
      }).catch(error => {
        console.log(`Error al eliminar el trabajo ${error}`)
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

<style lang='scss' scoped>
.img-content{
    width: 64px;
    height: 64px;
    overflow: hidden;
    margin: 1px 1px 0 0;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }
</style>
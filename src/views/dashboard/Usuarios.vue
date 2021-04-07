<template lang="pug">
.loader(v-if='loading') 
  .textoloader 
    h5 Procesando información
div(v-else='')
  .row
    .p-2.col-lg-4.col-md-4.col-sm-6.col-xs-12
      .card
        .card-header.bg-info
          span.text-white Nuevo Usuario
        .card-body
          .form-group
            input(id="nombre", name="nombre", placeholder="Nombre", v-model='user.nombre', @keyup='exampleUsername').form-control
          .form-group
            input(id="apellidos", name="apellidos", placeholder="Apellidos" v-model='user.apellidos').form-control
          .form-group
            input(id="email", name="email", placeholder="Correo electronico" v-model='user.email').form-control
          .form-group
            label.fs-small Sugerido: 
              span.text-muted {{ exampleUsername() }}
            input(id="username", name="username", placeholder="Nickname" v-model='user.username').form-control
          .form-group
            input(type='password' id="password", name="password", placeholder="Contraseña" v-model='user.password').form-control
          .form-group
            input(type='password' id="password_confirmation", name="password", placeholder="Repetir contraseña" v-model='user.password_confirmation').form-control
          .btn.btn-primary.btn-block(v-on:click='create') Crear
    
    .p-2.col-lg-8.col-md-8.col-sm-6.col-xs-12
      .card
        .card-header.bg-secondary
          span.text-white Listado de usuarios
        .card-body
          table.table
            thead.thead-dark
              tr
                th(width="50") &nbsp;
                th Nombre
                th Apellidos
                th Nickname
                th email
            tbody
              tr(v-for='u in users')
                td.d-flex.justify-content-center 
                  fas(icon='pen', v-if='!u.editar').green.mr-2(@click="u.editar = true")
                  fas(icon='times', v-if='u.editar', @click="u.editar = false").orange.mr-2
                  fas(icon='key')(@click="modalPassword(u.id)").purple.mr-2
                  fas(icon='trash').red(@click="modalDelete(u)")
                td 
                  input(v-if='u.editar', v-model='u.nombre', @keyup.enter='update(u)').form-control
                  span(v-else) {{ u.nombre }}
                td 
                  input(v-if='u.editar', v-model='u.apellidos', @keyup.enter='update(u)').form-control
                  span(v-else) {{ u.apellidos }}
                td
                  input(v-if='u.editar', v-model='u.username', @keyup.enter='update(u)').form-control
                  span(v-else) {{ u.username }}
                td
                  input(v-if='u.editar', v-model='u.email', @keyup.enter='update(u)').form-control
                  span(v-else) {{ u.email }}
  
  //- Delete modal
  #modalDelete.modal.fade(tabindex='-1' role='dialog', ref='modalDelete')
    .modal-dialog
      .modal-content
        .modal-header.bg-danger.text-white
          h5.modal-title Eliminacion de usuario
          button.close(type='button' data-dismiss='modal' aria-label='Close')
            span.text-white(@click='itemToDelete = {}') ×
        .modal-body
          .row
            .col-12
              p Estas completamente seguro de querer eliminar el siguiente usuario?
              b {{ itemToDelete.nombre }} {{ itemToDelete.apellidos }}
              p.text-right.text-danger.fs-small * Una vez realizada esta accion no puede ser revertida 
        .modal-footer
          button.btn.btn-danger(type='button' data-dismiss='modal', @click='itemToDelete = {}') Cerrar
          button.btn.btn-primary(type='button', @click='destroy') Eliminar
  
  //- Password modal
  #modalPassword.modal.fade(tabindex='-1' role='dialog', ref='modalPassword')
    .modal-dialog
      .modal-content
        .modal-header.bg-primary.text-white
          h5.modal-title Cambio de contraseña de usuario
          button.close(type='button' data-dismiss='modal' aria-label='Close')
            span.text-white(@click='updatePassword = { user_id: "", password: "", password_confirmation: ""}') ×
        .modal-body
          .row
            .col-12
              .form-group
                input(type='password' id="password", name="password", placeholder="Contraseña" v-model='updatePassword.password').form-control
              .form-group
                input(type='password' id="password_confirmation", name="password", placeholder="Repetir contraseña" v-model='updatePassword.password_confirmation').form-control
        .modal-footer
          button.btn.btn-danger(type='button' data-dismiss='modal', @click='updatePassword = { user_id: "", password: "", password_confirmation: ""}') Cerrar
          button.btn.btn-primary(type='button', @click='updatePwd') Actualizar
</template>

<script>
import $ from 'jquery'

export default {
  name: 'Usuarios',
  data () {
    return {
      users: [],
      loading: false,
      itemToDelete: {},
      updatePassword: {
        user_id: '',
        password: '',
        password_confirmation: ''
      }, 
      user: {
        nombre: '',
        apellidos: '',
        email: '',
        username: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  mounted () {
    this.index()
  },
  methods: {
    defaultData () {
      this.itemToDelete = {}
      this.user = {
        nombre: '',
        apellidos: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
      this.updatePassword = {
        user_id: '',
        password: '',
        password_confirmation: ''
      }
      this.index()
    },
    index () {
      this.$http.get('/v1/users', { headers: { 'Authorization': `Berear ${this.$store.state.token}` } } )
      .then(response => {
        this.users = response.data.map( o => ({...o, editar: false }) )
        this.loading = false
      }).catch(error => {
        console.log(`Error al leer categorias ${error}`)
        this.loading = false
        this.alertError( error.response.data )
      })
    },
    exampleUsername () {
      if(this.user.nombre.length > 0 && this.user.apellidos.length > 0){
        let ap  = this.user.apellidos.split(' ')
        
        return `${this.user.nombre.toLowerCase().charAt(0)}${ap[0].toLowerCase()}`
      }else
        return ''
    },
    create () {
      this.loading = true
      this.$http.post('/v1/users', { user: this.user }, { headers: { 'Authorization': `Berear ${this.$store.state.token}` } } )
      .then(response => {
        let status = response.status
        console.log( response )
        if( status == 201 ){
          this.defaultData()
        }
        this.loading = false
        this.$alertify.success('Usuario almacenado satisfactoriamente');
      }).catch(error => {
        console.log(`Error al crear categoria ${error}`)
        this.alertError( error.response.data )
        this.loading = false
      })
    },
    update (item) {
      this.loading = true
      this.$http.patch(`/v1/users/${item.id}`, { user: item }, { headers: { 'Authorization': `Berear ${this.$store.state.token}` } } )
      .then(response => {
        let status = response.status
        if( status == 200 )
          this.defaultData()
        this.loading = false
        this.$alertify.success('Usuario actualizado satisfactoriamente');
      }).catch(error => {
        console.log(`Error al actualizar categoria ${error}`)
        this.alertError( error.response.data )
        this.loading = false
      })
    },
    modalPassword(id) {
      this.updatePassword.user_id = id
      $('#modalPassword').modal('show')
    },
    updatePwd () {
      let obj = {
        user: {
          password: this.updatePassword.password,
          password_confirmation: this.updatePassword.password_confirmation
        }
      }
      this.$http.patch(`/v1/users/${this.updatePassword.user_id}/update_password`, obj,{ headers: { 'Authorization': `Berear ${this.$store.state.token}` } } )
      .then(response => {
        let status = response.status
        if( status == 200 )
          this.defaultData()
        this.loading = false
        this.$alertify.success('Usuario eliminado satisfactoriamente');
        $('#modalPassword').modal('hide')
      }).catch(error => {
        console.log(`Error al actualizar categoria ${error}`)
        this.alertError( error.response.data )
        this.loading = false
      })
    },
    modalDelete (user) {
      this.itemToDelete = user
      $('#modalDelete').modal('show')
    },
    destroy () {
      this.$http.delete(`/v1/users/${this.itemToDelete.id}`, { headers: { 'Authorization': `Berear ${this.$store.state.token}` } } )
      .then(response => {
        let status = response.status
        if( status == 204 )
          this,this.defaultData()
        this.loading = false
        this.$alertify.success('Usuario eliminado satisfactoriamente');
        $('#modalDelete').modal('hide')
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
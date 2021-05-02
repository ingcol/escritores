<template>
	<div >
		<div class="app-content pt-3 p-md-3 p-lg-4 ">
     <div class="container-xl bg-white p-4 shadow-sm">
      <div class=" row border-bottom mb-5">

       <div class="col-md-6"><h4 >Módulo de usuarios</h4></div>
       <div class="col-md-6"> <button @click="modalNuevo()" class="btn btn-success float-right mb-2 text-white">Registrar</button>
       </div>

     </div>
     <div class="tab-content" id="orders-table-tab-content mt-2">
      <div class="tab-pane fade show active" id="orders-all" role="tabpanel" aria-labelledby="orders-all-tab">
        <div class="app-card app-card-orders-table  mb-5">
          <div class="app-card-body">
            <div class="table-responsive">
              <table class="table app-table-hover mb-0 text-left">
                <thead>
                  <tr>
                    <th class="cell">Nombres</th>
                    <th class="cell">Correo</th>
                    <th class="cell">Estado</th>
                    <th class="cell">Editar</th>
                    <th class="cell">Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in usuarios">
                    <td class="cell">{{item.name}}</td>
                    <td class="cell">{{item.email}}</td>
                    <td class="cell">{{item.status}}</td>
                    
                    <td class="cell"><button  @click="modalEditar(item)" class="btn btn-warning"><i class="fa fa-edit text-white"></i></button></td>
                    <td class="cell"><button  @click="modalEliminar(item.id)" class="btn btn-danger"><i class="fa fa-trash text-white"></i></button></td>
                    
                  </tr>
                </tbody>
              </table>
            </div><!--//table-responsive-->

          </div><!--//app-card-body-->    
        </div><!--//app-card-->
      </div><!--//tab-pane-->

    </div><!--//tab-content-->
  </div>
</div>
<div class="modal fade" id="modalId" tabindex="-1" role="dialog" aria-labelledby="modalIdLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalIdLabel" v-if="!modoEditar">Registrar un usuario</h5>
        <h5 class="modal-title" id="modalIdLabel" v-else>Editar este usuario</h5>
        
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form @submit.prevent="modoEditar ? actualizarDatos(usuario) : guardarDatos()">
        <div class="modal-body">

          <div class="mb-3">
            <label>Nombres</label>
            <input type="text" class="form-control" v-model="usuario.name">
          </div>

          <div class="mb-3">
            <label>Correo</label>
             <input type="email" required="" class="form-control" v-model="usuario.email">
            
          </div>
          <div class="mb-3"  v-if="modoEditar">
            <label>Estado</label>
            <select class="form-control" v-model="usuario.status">
             <option value="Activo">Activo</option>
             <option value="Inactivo">Inactivo</option>
           </select>
         </div>

         <div class="mb-3">
            <label>Contraseña</label>
             <input type="password" class="form-control" v-model="usuario.password">
            
          </div>
          <div class="mb-3">
            <label>Confirmar contraseña</label>
             <input type="password" class="form-control" v-model="usuario.password_confirmation">
            
          </div>
         </div>
      <div class="modal-footer">

       <button type="button" @click="cerrarModalEditar" ref="closeBtn" class="btn btn-secondary" data-dismiss="modal" aria-label="Close">Cerrar</button>
       <button type="submit" :disabled="disable" class="btn btn-success text-white"><i class="display-loading"> <vue-loading  type="spin" v-if="loading" color="red"  :size="{ width: '30px', height: '2px' }"></vue-loading></i>   Enviar</button>
     </div>
   </form>
 </div>
</div>
</div>

<div class="modal fade" id="ModalEliminar" tabindex="-1" role="dialog" aria-labelledby="modalIdLabel" aria-hidden="true">
  <div class="modal-dialog modal-md" role="document">
    <div class="modal-content">
      <div class="modal-header d-block">
        <h5 class="modal-title text-center" id="modalIdLabel" >¿Desea eliminar este usuario?</h5>
        
  
      </div>

      <div class="modal-body">

       <div class="text-center">

         <button type="button" @click="cerrarModalEliminar" ref="deleteBtn" class="btn btn-secondary" data-dismiss="modal" aria-label="Close">Cancelar</button>
         <button type="submit" @click="eliminarUsuario()" :disabled="disable" class="btn btn-danger text-white"><i class="display-loading"> <vue-loading  type="spin" v-if="loading" color="red"  :size="{ width: '30px', height: '2px' }"></vue-loading></i>   Eliminar</button>
       </div>


     </div>
     

   </div>
 </div>
</div>

</div>
</template>
<script>

  import { VueLoading } from 'vue-loading-template'

  export default {
   components: {
    VueLoading
  },
  mounted() {
   this.getUsuarios();
   //this.$loading(true) loading para cargar en filtros
 },
 data() {
  return {
    idEliminar:'',
    disable:false,
    tituloModal:'',
    tituloBoton:'',
    showModal:false,
    modoEditar:false,
    usuarios:[],
    file:'',
    loading:false,
    usuario:{
      name:'',
      email:'',
      password:'',
      password_confirmation:''
    }
  }
},

methods: {
  
 abriModal(){
  let myModal = new bootstrap.Modal(document.getElementById('modalId'), {show:true,backdrop: 'static',
    keyboard: false});
  myModal.show();
},
modalNuevo(){
  this.modoEditar=false
  this.limpiarCampos();
  this.abriModal();
},
limpiarCampos(){
  this.usuario.name=''
  this.usuario.email=''
  this.usuario.password=''
  this.usuario.password_confirmation=''
},
guardarDatos(){
  this.disable=true
  this.loading=true

  axios.post('/api/usuario', {
    name:this.usuario.name,
    email:this.usuario.email,
    password:this.usuario.password,
    password_confirmation:this.usuario.password_confirmation
    
  })
  .then(response => {
    this.loading=false
    this.disable=false
    this.mensajeGuardado();
    this.limpiarCampos();
    this.usuarios.push(response.data);
  }).catch(error => {
    this.disable=false
    this.loading=false
    this.mensajeError(error);
  });

},
modalEditar(item){
  this.limpiarCampos();
  this.abriModal();
  this.modoEditar = true;
  this.usuario.name = item.name;
  this.usuario.email = item.email;
  this.usuario.status = item.status;
  this.usuario.id = item.id;
},
actualizarDatos(usuario){
  this.disable=true
  this.loading=true
  let actualizarUsuario={
    name:usuario.name,
    email:usuario.email,
    status:usuario.status,
    password:usuario.password,
    password_confirmation:usuario.password_confirmation

  }
 
  axios.put('/api/usuario/'+this.usuario.id, actualizarUsuario).then(response => {
    this.cerrarModalEditar();
    this.modoEditar=false
    this.disable=false
    this.loading=false
    this.mensajeEditado()
    this.getUsuarios();
  }).catch(error => {
    this.disable=false
    this.loading=false
    this.mensajeError(error);
  });
},
cerrarModalEditar(){
  const elem = this.$refs.closeBtn
  elem.click()

},
cerrarModalEliminar(){
  const elem = this.$refs.deleteBtn
  elem.click()

},
mensajeGuardado(){
  this.$toastr.Add({
    name: "UniqueToastName", 
    title: "¡Hecho!", 
    msg: "Registro exitoso", 
    clickClose: false, 
    timeout: 5000, 
    position: "toast-top-right", 
    type: "success", 
    preventDuplicates: true,
  });
},
mensajeEditado(){
  this.$toastr.Add({
    name: "UniqueToastName", 
    title: "¡Hecho!", 
    msg: "Registro editado exitosamente", 
    clickClose: false, 
    timeout: 5000, 
    position: "toast-top-right", 
    type: "success", 
    preventDuplicates: true,
  });
},
mensajeEliminado(){
  this.$toastr.Add({
    name: "UniqueToastName", 
    title: "¡Atención!", 
    msg: "Registro eliminado", 
    clickClose: false, 
    timeout: 5000, 
    position: "toast-top-right", 
    type: "info", 
    preventDuplicates: true,
  });
},
mensajeError(error){
  for(let value in error.response.data.errors){

    this.$toastr.Add({
      name: "UniqueToastName", 
      title: "¡Error!", 
      msg: error.response.data.errors[value][0], 
      clickClose: false, 
      timeout: 8000, 
      position: "toast-top-right", 
      type: "error", 
      preventDuplicates: true,
    });

  }
},

modalEliminar(id){
  this.idEliminar=id
  
  let myModalEliminar = new bootstrap.Modal(document.getElementById('ModalEliminar'), {show:true,backdrop: 'static',
    keyboard: false});
  myModalEliminar.show();

},
eliminarUsuario(){

axios.delete('/api/usuarioEliminar/'+this.idEliminar).then(response => {
    this.cerrarModalEliminar();
    this.mensajeEliminado()
    this.modoEditar=false
    this.disable=false
    this.loading=false
    this.getUsuarios();
  }).catch(error => {
    this.disable=false
    this.loading=false
    this.mensajeError(error);
  });

},
getUsuarios() {
  axios.get('/api/usuarioListado')
  .then(response => {
    this.usuarios = response.data;
    


  })
  .catch(errors => {

  });
},



},
computed: {


}
};
</script>

<style type="text/css">
  .height-text-tarea{
    height: 100px;
  }
  .display-loading{
    display:inline-block;
  }
  .img-usuario{
    width: 100%; max-width: 150px; height: 100px
  }
</style>
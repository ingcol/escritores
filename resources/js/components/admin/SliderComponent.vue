<template>
	<div >
		<div class="app-content pt-3 p-md-3 p-lg-4 ">
     <div class="container-xl bg-white p-4 shadow-sm">
      <div class=" row border-bottom mb-5">

       <div class="col-md-6"><h4 >Módulo de slider</h4></div>
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
                    <th class="cell">Titulo</th>
                    <th class="cell">Descripción</data></th>
                    <th class="cell">Estado</th>
                    <th class="cell">Imágen</th>
                    <th class="cell">Editar</th>
                    <th class="cell">Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in sliders">
                    <td class="cell">{{item.TituloSlider}}</td>
                    <td class="cell">{{item.DescripcionSlider}}</td>
                    <td class="cell">{{item.EstadoSlider}}</td>
                    <td class="cell"><img  class="img-thumbnail img-slider" :src="'../storage/sliders/'+item.file_name"></td>
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
        <h5 class="modal-title" id="modalIdLabel" v-if="!modoEditar">Registrar un slider</h5>
        <h5 class="modal-title" id="modalIdLabel" v-else>Editar este Slider</h5>
        
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form @submit.prevent="modoEditar ? actualizarDatos(slider) : guardarDatos()">
        <div class="modal-body">

          <div class="mb-3">
            <label>Título</label>
            <input type="text" class="form-control" v-model="slider.TituloSlider">
          </div>

          <div class="mb-3">
            <label>Descripción</label>
            <textarea  class="form-control height-text-tarea" v-model="slider.DescripcionSlider"></textarea>
          </div>
          <div class="mb-3"  v-if="modoEditar">
            <label>Estado</label>
            <select class="form-control" v-model="slider.EstadoSlider">
             <option value="Activo">Activo</option>
             <option value="Inactivo">Inactivo</option>
           </select>
         </div>
         <label>Imágen: tamaño recomendado(1300x800)</label>
         <div class="mt-4 mb-3">

          <input  id="file" title="Imágen tamaño recomendado(1300x800)" type="file" @change="cargarArchivos" accept=".png, .jpg, .jpeg"  ref="file" />

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
        <h5 class="modal-title text-center" id="modalIdLabel" >¿Desea eliminar este slider?</h5>
        
  
      </div>

      <div class="modal-body">

       <div class="text-center">

         <button type="button" @click="cerrarModalEliminar" ref="deleteBtn" class="btn btn-secondary" data-dismiss="modal" aria-label="Close">Cancelar</button>
         <button type="submit" @click="eliminarSlider()" :disabled="disable" class="btn btn-danger text-white"><i class="display-loading"> <vue-loading  type="spin" v-if="loading" color="red"  :size="{ width: '30px', height: '2px' }"></vue-loading></i>   Eliminar</button>
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
   this.getSliders();
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
    sliders:[],
    file:'',
    loading:false,
    slider:{
      TituloSlider:'',
      DescripcionSlider:'',
      EstadoSlider:'',
    }
  }
},

methods: {
  cargarArchivos(e) {
   this.file = e.target.files[0];
 },

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
  this.slider.TituloSlider=''
  this.slider.DescripcionSlider=''
  this.slider.EstadoSlider=''
  this.$refs.file.value=null;
},
guardarDatos(){
  this.disable=true
  this.loading=true
  let formData = new FormData();
  formData.append('file', this.file);
  formData.append('TituloSlider', this.slider.TituloSlider);
  formData.append('DescripcionSlider', this.slider.DescripcionSlider);
  formData.append('EstadoSlider', this.slider.EstadoSlider);
  axios.post('/slider', formData, {
    headers: { 'content-type': 'multipart/form-data' }
  })
  .then(response => {
    this.loading=false
    this.disable=false
    this.mensajeGuardado();
    this.limpiarCampos();
    this.sliders.unshift(response.data);
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
  this.slider.TituloSlider = item.TituloSlider;
  this.slider.DescripcionSlider = item.DescripcionSlider;
  this.slider.EstadoSlider = item.EstadoSlider;
  this.slider.id = item.id;
},
actualizarDatos(slider){
  this.disable=true
  this.loading=true
  let formData = new FormData();
  formData.append('file', this.file);
  formData.append('TituloSlider', this.slider.TituloSlider);
  formData.append('DescripcionSlider', this.slider.DescripcionSlider);
  formData.append('EstadoSlider', this.slider.EstadoSlider);
  formData.append('_method', 'put');
  axios.post('slider/'+this.slider.id, formData).then(response => {
    this.cerrarModalEditar();
    this.modoEditar=false
    this.disable=false
    this.loading=false
    this.mensajeEditado()
    this.getSliders();
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
eliminarSlider(){

axios.delete('slider/'+this.idEliminar).then(response => {
    this.cerrarModalEliminar();
    this.mensajeEliminado()
    this.modoEditar=false
    this.disable=false
    this.loading=false
    this.getSliders();
  }).catch(error => {
    this.disable=false
    this.loading=false
    this.mensajeError(error);
  });

},
getSliders() {
  axios.get('/api/slider')
  .then(response => {
    this.sliders = response.data;
    console.log(response.data);


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
  .img-slider{
    width: 100%; max-width: 150px; height: 100px
  }
</style>
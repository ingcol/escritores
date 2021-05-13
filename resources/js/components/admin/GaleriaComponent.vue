<template>
	<div >
		<div class="app-content pt-3 p-md-3 p-lg-4 ">
     <div class="container-xl bg-white p-4 shadow-sm">
      <div class=" row border-bottom mb-5">

       <div class="col-md-6"><h4 >Módulo de galerías</h4></div>
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
                    <td class="cell">Nombre</td>
                    <th class="cell">Imágen</th>
                    <th class="cell">Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in galerias">
                   <td class="cell">{{item.file}}</td>
                   <td class="cell"><img  class="img-thumbnail img-slider" :src="item.file_url"></td>
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
        <h5 class="modal-title" id="modalIdLabel" >Registrar galerías</h5>

        
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

       <p>Imágenes: puede seleccionar múltiples<p>
         <p v-if="cantDeImagenes" class="text-success"><i class="fa fa-check"></i> Imágenes seleccionadas: {{cantDeImagenes}}</p>
         <div class="mt-4 mb-3">
          <div class="fileUpload">
            <input  @change="cargarArchivos" class="upload" title="Adjuntar archivos" type="file"  name="image"  accept=".png, .jpg, .jpeg" id="file"   ref="files" multiple />
            <span>Seleccione imágenes</span>
          </div>

        </div>

      </div>
      <div class="modal-footer">
        <button type="button"  class="btn btn-secondary" data-dismiss="modal" aria-label="Close">Cerrar</button>
        <button type="submit" @click="guardarDatos()" :disabled="disable" class="btn btn-success text-white"><i class="display-loading"> <vue-loading  type="spin" v-if="loading" color="red"  :size="{ width: '30px', height: '2px' }"></vue-loading></i>   Enviar</button>
      </div>

    </div>
  </div>
</div>

<div class="modal fade" id="ModalEliminar" tabindex="-1" role="dialog" aria-labelledby="modalIdLabel" aria-hidden="true">
  <div class="modal-dialog modal-md" role="document">
    <div class="modal-content">
      <div class="modal-header d-block">
        <h5 class="modal-title text-center" id="modalIdLabel" >¿Desea eliminar esta imagen?</h5>
        

      </div>

      <div class="modal-body">

       <div class="text-center">

         <button type="button" @click="cerrarModalEliminar" ref="deleteBtn" class="btn btn-secondary" data-dismiss="modal" aria-label="Close">Cancelar</button>
         <button type="submit" @click="eliminarGaleria()" :disabled="disable" class="btn btn-danger text-white"><i class="display-loading"> <vue-loading  type="spin" v-if="loading" color="red"  :size="{ width: '30px', height: '2px' }"></vue-loading></i>   Eliminar</button>
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
   this.getGalerias();

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

    archivos:[],
    galerias:[],
    file:'',
    loading:false,
    cantDeImagenes:0,
    
  }
},

methods: {

  cantImagen(cant){
    this.cantDeImagenes=cant
  },
  cargarArchivos(e){
    this.archivos=[]
    let vm = this;
    var selectedFiles = e.target.files;

    for (let i = 0; i < selectedFiles.length; i++) {

      this.archivos.push(selectedFiles[i]);
    }
    for (let i = 0; i < this.archivos.length; i++) {
      let reader = new FileReader();
      reader.onload = (e) => {
          //this.$refs.image[i].src = reader.result;

            //console.log(this.$refs.image[i].src);
          };

          reader.readAsDataURL(this.archivos[i]);
        }
        
        this.cantImagen(this.archivos.length);

        this.$refs.files.value=null;
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

        this.$refs.files.value=null;
        this.cantDeImagenes=0
        this.archivos=[]
      },
      guardarDatos(){
        this.disable=true
        this.loading=true
        var self=this;
        let formData = new FormData();
        for(let i = 0; i < this.archivos.length; i++){
          let file=self.archivos[i];

          formData.append('files[' + i + ']', file);


        }

        axios.post('/galeria', formData, {
          headers: { 'content-type': 'multipart/form-data' }
        })
        .then(response => {
          this.loading=false
          this.disable=false
          this.mensajeGuardado();
          this.limpiarCampos();
          this.getGalerias();
        }).catch(error => {
          this.disable=false
          this.loading=false
          this.mensajeError(error);
        });

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
      eliminarGaleria(){
        this.disable=true
        this.loading=true
        axios.delete('galeria/'+this.idEliminar).then(response => {
          this.cerrarModalEliminar();
          this.mensajeEliminado()
          this.modoEditar=false
          this.disable=false
          this.loading=false
          this.getGalerias();
        }).catch(error => {
          this.disable=false
          this.loading=false
          this.mensajeError(error);
        });

      },
      getGalerias() {
        axios.get('/api/galeriaListado')
        .then(response => {
          this.galerias = response.data;
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

<style scoped="">
  .fileUpload {
    background: orange;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    color: #fff;
    font-size: 1em;
    font-weight: bold;
    margin: 1.25em auto;/*20px/16px 0*/
    overflow: hidden;
    padding: 0.875em;/*14px/16px*/
    position: relative;
    text-align: center;
    width: 120px;
    cursor: pointer;
  }
  .fileUpload:hover, .fileUpload:active, .fileUpload:focus {
    background: #00a2a4;
    cursor: pointer;
  }
  .fileUpload input.upload {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    filter: alpha(opacity=0);
    width: 148px;
    height: 46px;
    cursor: pointer;
  }

  input[type="file"] {
    position: fixed;
    right: 100%;
    bottom: 100%;
  }
  .custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
  }
</style>
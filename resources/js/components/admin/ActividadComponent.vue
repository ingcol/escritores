<template>
	<div >
		<div class="app-content pt-3 p-md-3 p-lg-4 ">
     <div class="container-xl bg-white p-4 shadow-sm">
      <div class=" row border-bottom mb-5">
        <div class="col-md-6"><h4 >Módulo de actividades</h4></div>
        <div class="col-md-6"> <button @click="modalNuevo()" class="btn btn-success float-right mb-2 text-white">Registrar</button>
        </div>

      </div>
      <div class="tab-content" id="orders-table-tab-content mt-2">
        <div class="tab-pane fade show active" id="orders-all" role="tabpanel" aria-labelledby="orders-all-tab">
          <div class="app-card app-card-orders-table  mb-5">
            <div class="app-card-body">
             <div class="row">
              <div class="col-md-4">
                <label>Filtrar</label>

                <select v-model="length" @change="resetPagination()" class="form-control input-custom">
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>

              </div>

              <div class="col-md-4"> </div>
              <div class="col-md-4">
                <label>Búsqueda</label>

                <input type="text" v-model="search" placeholder="" @input="resetPagination()" class="form-control input-custom">
              </div>
            </div>
            <div class="table-responsive">
              <table class="table  jambo_table bulk_action">
                <thead>
                  <tr class=" tabla-fondo">
                    <th>Tiulo</th>
                    <th>Estado</th>
                    <th>Descripción</th>
                    <th>Imagenes</th>
                    <th>Eliminar</th>
                    <th>Editar</th>
                  </tr>
                </thead>
                <tbody>

                  <tr v-for="item in paginatedActividades" :key="item.id">
                    <td>{{item.TituloActividad}}</td>
                    <td>{{item.EstadoActividad}}</td>
                    <td>
                      <p  v-if="item.DescripcionActividad.length<40" v-html="item.DescripcionActividad"></p>
                      <p v-else v-html="item.DescripcionActividad.substring(0,40)+'...'"></p>
                    </td>
                    <td><button class="btn btn-sm btn-info text-white mt-2" v-if="item.imagenes.length"  @click="modalEliminar(item.imagenes)"><i class="fa fa-eye"></i> {{item.imagenes.length}}</button>  <span v-else>0</span> </td>
                    <td class="cell"><button  @click="modalEliminarActividad(item.id)" class="btn btn-warning"><i class="fa fa-trash text-white"></i></button></td>
                    <td class="cell"><button  @click="modalEditar(item)" class="btn btn-warning"><i class="fa fa-edit text-white"></i></button></td>


                  </tr>
                </tbody>

              </table>

            </div><!--//table-responsive-->
            
            <div  class="paginator float-right">
              <nav class="pagination" v-if="!tableShow.showdata" >
                <span class="page-stats cantidad-registro" >{{pagination.from}} - {{pagination.to}} de {{pagination.total}}</span>
                <a v-if="pagination.prevPageUrl"  class=" margin-button" @click="--pagination.currentPage">
                  <i class="fa fa-arrow-circle-left"></i>
                </a>
                <a class="margin-button" v-else disabled >
                  <i class="fa fa-arrow-circle-left"></i>
                </a>
                <a v-if="pagination.nextPageUrl" class=" margin-button"  @click="++pagination.currentPage">
                  <i class="fa fa-arrow-circle-right"></i>
                </a>
                <a class="margin-button"  v-else disabled>
                  <i class="fa fa-arrow-circle-right"></i>
                </a>
              </nav>
              <nav class="pagination" v-else>
                <span class="page-stats cantidad-registro" >Mostrando
                  {{pagination.from}} - {{pagination.to}} de un total {{filteredActividades.length}}
                  <span v-if="`filteredActividades.length < pagination.total`"></span>
                </span>
                <a v-if="pagination.prevPage" class=" margin-button" @click="--pagination.currentPage" ><i class="fa fa-arrow-circle-left"></i>

                </a>
                <a class="margin-button" v-else disabled >
                  <i class="fa fa-arrow-circle-left"></i>
                </a>
                <a v-if="pagination.nextPage" class="margin-button" @click="++pagination.currentPage" ><i class="fa fa-arrow-circle-right"></i>

                </a>
                <a class="margin-button"  v-else disabled ><i class="fa fa-arrow-circle-right"></i>
                </a>
              </nav>
            </div>

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
        <h5 class="modal-title" id="modalIdLabel" v-if="!modoEditar">Registrar una actividad</h5>
        <h5 class="modal-title" id="modalIdLabel" v-else>Editar esta actividad</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form @submit.prevent="modoEditar ? actualizarDatos() : guardarDatos()">
        <div class="modal-body">

          <div class="mb-3">

            <label class="mb-1">Título para la actividad</label>
            <textarea v-model="TituloActividad" class="form-control"></textarea>

          </div>

          <div class="mb-3">
            <label class="mb-1">Descripción para la actividad</label>

            <ckeditor  v-model="DescripcionActividad" class="mb-1" :config="editorConfig"></ckeditor>


          </div>
          <div class="mb-3"  v-if="modoEditar">
            <label>Estado</label>
            <select class="form-control" v-model="EstadoActividad">
             <option value="Activo">Activo</option>
             <option value="Inactivo">Inactivo</option>
           </select>
         </div>


         <p v-if="cantDeImagenes" class="text-success"><i class="fa fa-check"></i> Imágenes seleccionadas: {{cantDeImagenes}}</p>
         <div class="mt-4 mb-3">
          <div class="fileUpload">
            <input  @change="cargarArchivos" class="upload" title="Adjuntar archivos" type="file"  name="image"  accept=".png, .jpg, .jpeg" id="file"   ref="files" multiple />
            <span>Seleccione imágenes</span>
          </div>

        </div>

      </div>
      <div class="modal-footer">
        <button type="button" ref="closeBtn"  class="btn btn-secondary" data-dismiss="modal" aria-label="Close">Cerrar</button>
        <button type="submit"  :disabled="disable" class="btn btn-success text-white"><i class="display-loading"> <vue-loading  type="spin" v-if="loading" color="red"  :size="{ width: '30px', height: '2px' }"></vue-loading></i>   Enviar</button>
      </div>
    </form>

  </div>
</div>
</div>

<!--Modal images-->

<div class="modal fade" id="ModalEliminar" tabindex="-1" role="dialog" aria-labelledby="modalIdLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalIdLabel">Listado de imágenes</h5>

        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      
      <div class="modal-body">
        <div class="table-responsive">
          <table class="table app-table-hover mb-0 text-left">
            <thead>
             <tr>
               <th class="cell">Nombre</th>
               <th class="cell">Imagen</th>
               <th class="cell">Eliminar</th>
             </tr>
           </thead>
           <tbody>
            <tr v-for="data in imagenes">
             <td class="cell">{{data.file}}</td>
             <td class="cell"><img  class="img-thumbnail img-slider" :src="data.file_url"></td>
             <td class="cell"><button  :disabled="disable" @click="eliminarImagen(data.id)" class="btn btn-danger mt-2"><i class="fa fa-trash text-white"></i></button></td>

             

           </tr>
         </tbody>
       </table>
     </div><!--//table-responsive-->




   </div>
   <div class="modal-footer">
    <button type="button"  ref="deleteBtn" class="btn btn-secondary" data-dismiss="modal" aria-label="Close">Cerrar</button>

  </div>


</div>
</div>
</div>

<!--EliminarActividad-->
<div class="modal fade" id="ModalEliminarActividad" tabindex="-1" role="dialog" aria-labelledby="modalIdLabel" aria-hidden="true">
  <div class="modal-dialog modal-md" role="document">
    <div class="modal-content">
      <div class="modal-header d-block">
        <h5 class="modal-title text-center" id="modalIdLabel" >¿Desea eliminar esta actividad?</h5>
        

      </div>

      <div class="modal-body">

       <div class="text-center">

         <button type="button" @click="cerrarModalEliminarActividad" ref="deleteBtnAct" class="btn btn-secondary" data-dismiss="modal" aria-label="Close">Cancelar</button>
         <button type="submit" @click="eliminarActividad()" :disabled="disable" class="btn btn-danger text-white"><i class="display-loading"> <vue-loading  type="spin" v-if="loading" color="red"  :size="{ width: '30px', height: '2px' }"></vue-loading></i>   Eliminar</button>
       </div>


     </div>
     

   </div>
 </div>
</div>

</div>
</template>
<script>

  import { VueLoading } from 'vue-loading-template'
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  export default {
   components: {
    VueLoading
  },
  mounted() {
   this.getActividades();

   //this.$loading(true) loading para cargar en filtros
 },
 data() {
   let sortOrders = {};
   let columns = [
   {label: 'Nombre', name: 'NombreAutor' },
   {label: 'Estado', name: 'EstadoAutor'},

   ];
   columns.forEach((column) => {
     sortOrders[column.NombreAutor] = -1;
   });
   return {
    editorConfig:{
      removePlugins: 'elementspath',
      extraPlugins : "justify",
      removeButtons: 'justify',
      toolbar:[
      { name: 'document', items: [ '-', 'Save', 'NewPage', 'Preview', 'Print', '-', 'Templates' ] },
      { name: 'clipboard', items: [ 'Cut', '-', 'Undo', 'Redo' ] },



      { name: 'basicstyles', items: [ 'Bold', 'Italic' ] },
      { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-',  '-',  '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl'] },


      { name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
      { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
      { name: 'tools', items: [ 'Maximize', 'ShowBlocks' ] },

      ]


    },
    idEliminarActividad:'',
    imagenes:[],
    editorData:'',
    disable:false,
    tituloModal:'',
    tituloBoton:'',
    showModal:false,
    modoEditar:false,

    archivos:[],
    actividades:[],
    file:'',
    TituloActividad:'',
    DescripcionActividad:'',
    EstadoActividad:'',
    loading:false,
    cantDeImagenes:0,
    pagination: {
      currentPage: 1,
      total: '',
      nextPage: '',
      prevPage: '',
      from: '',
      to: ''
    },

    columns: columns,
        //sortKey: 'EstadoPiso',
        sortOrders: sortOrders,
        length: 10,
        search: '',
        tableShow: {
          showdata: true,
        },

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
        this.TituloActividad=''
        this.DescripcionActividad=''
      },
      modalEditar(item){
        this.limpiarCampos();
        this.abriModal();
        this.modoEditar = true;
        this.TituloActividad = item.TituloActividad;
        this.DescripcionActividad = item.DescripcionActividad;
        this.EstadoActividad = item.EstadoActividad;
        this.id = item.id;
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
        formData.append('TituloActividad',this.TituloActividad);
        formData.append('DescripcionActividad', this.DescripcionActividad);


        axios.post('/api/actividad', formData, {
          headers: { 'content-type': 'multipart/form-data' }
        })
        .then(response => {
          this.loading=false
          this.disable=false
          this.mensajeGuardado();
          this.limpiarCampos();
          this.getActividades();
        }).catch(error => {
          this.disable=false
          this.loading=false
          this.mensajeError(error);
        });

      },
      actualizarDatos(){


        this.disable=true
        this.loading=true
        let formData = new FormData();
        formData.append('file', this.file);
        formData.append('TituloActividad', this.TituloActividad);
        formData.append('DescripcionActividad', this.DescripcionActividad);
        formData.append('EstadoActividad', this.EstadoActividad);
        formData.append('_method', 'put');
        var self=this;
        
        for(let i = 0; i < this.archivos.length; i++){
          let file=self.archivos[i];

          formData.append('files[' + i + ']', file);


        }
        axios.post('/api/actividad/'+this.id, formData).then(response => {
          this.cerrarModalEditar();
          this.modoEditar=false
          this.disable=false
          this.loading=false
          this.mensajeEditado()
          this.getActividades();
        }).catch(error => {
          this.disable=false
          this.loading=false
          this.mensajeError(error);
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

      cerrarModalEditar(){
        const elem = this.$refs.closeBtn
        elem.click()

      },
      cerrarModalEliminar(){
        const elem = this.$refs.deleteBtn
        elem.click()

      },
      cerrarModalEliminarActividad(){
        const elem = this.$refs.deleteBtnAct
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


      modalEliminarActividad(idEliminarActividad){

       this.idEliminarActividad=idEliminarActividad

       let myModalEliminarActividad = new bootstrap.Modal(document.getElementById('ModalEliminarActividad'), {show:true,backdrop: 'static',
        keyboard: false});
       myModalEliminarActividad.show();

     },

     modalEliminar(imagenes){


      this.imagenes=imagenes

      let myModalEliminar = new bootstrap.Modal(document.getElementById('ModalEliminar'), {show:true,backdrop: 'static',
        keyboard: false});
      myModalEliminar.show();

    },
    eliminarImagen(id){
      this.disable=true

      axios.delete('/api/eliminarImagenActividad/'+id).then(response => {
        this.disable=false

        const eliminarImg = this.imagenes.findIndex((eliminar)=>{
         return eliminar.id == id
       } );



        if(eliminarImg>= 0){

          this.$delete(this.imagenes, eliminarImg)
        }

        if (this.imagenes.length==0) {
          this.cerrarModalEliminar();
        }
        this.mensajeEliminado()
        this.modoEditar=false
        this.disable=false

        this.getActividades();
      }).catch(error => {
        this.disable=false

        this.mensajeError(error);
      });

    },
    eliminarActividad(){
      this.disable=true

      axios.delete('/api/eliminarActividad/'+this.idEliminarActividad).then(response => {
        this.disable=false

        this.cerrarModalEliminarActividad()

        this.mensajeEliminado()
        this.modoEditar=false
        this.disable=false

        this.getActividades();
      }).catch(error => {
        this.disable=false

        this.mensajeError(error);
      });

    },
    getActividades() {
      axios.get('/api/listadoActividad')
      .then(response => {
        this.actividades = response.data;
      }).catch(errors => {

      });
    },
    paginate(array, length, pageNumber) {
      this.pagination.from = array.length ? ((pageNumber - 1) * length) + 1 : ' ';
      this.pagination.to = pageNumber * length > array.length ? array.length : pageNumber * length;
      this.pagination.prevPage = pageNumber > 1 ? pageNumber : '';
      this.pagination.nextPage = array.length > this.pagination.to ? pageNumber + 1 : '';
      return array.slice((pageNumber - 1) * length, pageNumber * length);
    },
    resetPagination() {
      this.pagination.currentPage = 1;
      this.pagination.prevPage = '';
      this.pagination.nextPage = '';
    },
    sortBy(key) {
      this.resetPagination();
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
    },
    getIndex(array, key, value) {
      return array.findIndex(i => i[key] == value)
    },



  },
  computed: {

   filteredActividades() {
    let actividades = this.actividades;
    if (this.search) {
      actividades = actividades.filter((row) => {
        return Object.keys(row).some((key) => {
          return String(row[key]).toLowerCase().indexOf(this.search.toLowerCase()) > -1;
        })
      });
    }
    let sortKey = this.sortKey;
    let order = this.sortOrders[sortKey] || 1;
    if (sortKey) {
      actividades = actividades.slice().sort((a, b) => {
        let index = this.getIndex(this.columns, 'name', sortKey);
        a = String(a[sortKey]).toLowerCase();
        b = String(b[sortKey]).toLowerCase();
        if (this.columns[index].type && this.columns[index].type === 'date') {
          return (a === b ? 0 : new Date(a).getTime() > new Date(b).getTime() ? 1 : -1) * order;
        } else if (this.columns[index].type && this.columns[index].type === 'number') {
          return (+a === +b ? 0 : +a > +b ? 1 : -1) * order;
        } else {
          return (a === b ? 0 : a > b ? 1 : -1) * order;
        }
      });
    }
    return actividades;
  },
  paginatedActividades() {
    return this.paginate(this.filteredActividades, this.length, this.pagination.currentPage);
  }


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

  .margin-button {
    color: #222 !important;
    padding: 3px 14px;
    background: #fafafa;
    margin-left: 2px;
    cursor: pointer;
  }
</style>
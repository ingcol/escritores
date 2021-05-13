<template>
	<div >
		<div class="app-content pt-3 p-md-3 p-lg-4 ">
     <div class="container-xl bg-white p-4 shadow-sm">
      <div class=" row border-bottom mb-5">
        <div class="col-md-12"><h4 >Información de la fundación</h4></div>
      </div>
      <div class="row">

        <div class="col-md-4">
          <div>
            <label>Nombre</label>
            <input type="text"v-model="editar.nombreEmpresa" class="form-control">
            
          </div>
          

        </div>
        <div class="col-md-4">
          <div>
            <label>Nit</label>
            <input type="text" v-model="editar.nitEmpresa"class="form-control">
            
          </div>

        </div>

        <div class="col-md-4">
          <div>
            <label>Eslogan</label>
            <input type="text" v-model="editar.esloganEmpresa" class="form-control">
            
          </div>

        </div>
        

      </div>

      <div class="row mt-3">

        <div class="col-md-4">
          <div>
            <label>Teléfono</label>
            <input type="number" min="0" v-model="editar.telefonoEmpresa" class="form-control">
            
          </div>

        </div>
        <div class="col-md-4">
          <div>
            <label>Dirección</label>
            <input type="text" v-model="editar.direccionEmpresa" class="form-control">
            
          </div>

        </div>
        <div class="col-md-4">
          <div>
            <label>Correo</label>
            <input type="email" v-model="editar.correoEmpresa" class="form-control">
            
          </div>

        </div>
        

      </div>
      <hr>
      <div class="row mt-3">

        <div class="col-md-4">
          <div>
            <label>Facebook (url)</label>
            <input type="text"v-model="editar.facebookEmpresa" class="form-control">
            
          </div>
          

        </div>
        <div class="col-md-4">
          <div>
            <label>Twitter (url)</label>
            <input type="text" v-model="editar.twitterEmpresa"class="form-control">
            
          </div>

        </div>

        <div class="col-md-4">
          <div>
            <label>Instagram (url)</label>
            <input type="text" v-model="editar.instagramEmpresa" class="form-control">
            
          </div>

        </div>
        

      </div>
      <hr>
      <div class="row mt-3">
        <div class="col-md-6">
          <div>
            <label>Whatsapp</label>
            <input type="number" min="0" v-model="editar.whatsappEmpresa" class="form-control">
            
          </div>
          

        </div>

        <div class="col-md-6">
          <div>
            <label>Video Youtube</label>
            <input type="text" v-model="editar.videoYoutubeEmpresa" class="form-control">
            
          </div>
          

        </div>
        

      </div>
      <hr>
      <div class="row mt-3 ">

        <div class="col-md-12">
          <label>Nosotros</label>
          <ckeditor  class="mb-1" v-model="editar.nosotrosEmpresa":config="editorConfig"></ckeditor>

        </div>

      </div>
      <hr>
      <div class="row mt-3 ">
        <div class="col-md-12">
          <label>Misión</label>
          <ckeditor  class="mb-1" v-model="editar.misionEmpresa":config="editorConfig"></ckeditor>

        </div>
      </div>
      <hr>
      <div class="row mt-3 ">

        <div class="col-md-12">
          <label>Visión</label>
          <ckeditor  class="mb-1" v-model="editar.visionEmpresa":config="editorConfig"></ckeditor>

        </div>
      </div>
      <hr>
      <div class="row mt-3 ">

        <div class="col-md-12">
          <label>Valores</label>
          <ckeditor  class="mb-1" v-model="editar.valoresEmpresa":config="editorConfig"></ckeditor>

        </div>
      </div>

      <div class="p-3 mt-3 border-top"><button @click="actualizarDatos()" class="btn btn-success float-right text-white">Actualizar</button></div>


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
   this.getDatos();

   //this.$loading(true) loading para cargar en filtros
 },
 data() {

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
    editar:{
      nombreEmpresa:'',
      telefonoEmpresa:'',
      nitEmpresa:'',
      esloganEmpresa:'',
      direccionEmpresa:'',
      correoEmpresa:'',
      nosotrosEmpresa:'',
      misionEmpresa:'',
      visionEmpresa:'',
      valoresEmpresa:'',
      facebookEmpresa:'',
      twitterEmpresa:'',
      instagramEmpresa:'',
      whatsappEmpresa:'',
      videoYoutubeEmpresa:''

    },

    imagenes:[],
    disable:false,
    
    loading:false,
    

  }
},

methods: {

  actualizarDatos(){
    
    let formData={
      NombreEmpresa: this.editar.nombreEmpresa,
      TelefonoEmpresa:this.editar.telefonoEmpresa,
      NitEmpresa:this.editar.nitEmpresa,
      EsloganEmpresa:this.editar.esloganEmpresa,
      DireccionEmpresa:this.editar.direccionEmpresa,
      EmailEmpresa: this.editar.correoEmpresa,
      NosotrosEmpresa:this.editar.nosotrosEmpresa,
      MisionEmpresa: this.editar.misionEmpresa,
      VisionEmpresa:this.editar.visionEmpresa,
      ValoresEmpresa:this.editar.valoresEmpresa,
      FacebookEmpresa: this.editar.facebookEmpresa,
      TwitterEmpresa:this.editar.twitterEmpresa,
      InstagramEmpresa:this.editar.instagramEmpresa,
      WhatsappEmpresa:this.editar.whatsappEmpresa,
      VideoYoutubeEmpresa:this.editar.videoYoutubeEmpresa}

      this.disable=true
      this.loading=true
      
      axios.post('/api/empresaActualizar', formData).then(response => {
        
        this.modoEditar=false
        this.disable=false
        this.loading=false
        this.mensajeEditado()
        
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
    getDatos() {
      axios.get('/api/empresa')
      .then(response => {
        this.editar.nombreEmpresa=response.data.NombreEmpresa
        this.editar.telefonoEmpresa=response.data.TelefonoEmpresa
        this.editar.nitEmpresa=response.data.NitEmpresa
        this.editar.esloganEmpresa=response.data.EsloganEmpresa
        this.editar.direccionEmpresa=response.data.DireccionEmpresa
        this.editar.correoEmpresa=response.data.EmailEmpresa
        this.editar.nosotrosEmpresa=response.data.NosotrosEmpresa
        this.editar.misionEmpresa=response.data.MisionEmpresa
        this.editar.visionEmpresa=response.data.VisionEmpresa
        this.editar.valoresEmpresa=response.data.ValoresEmpresa
        this.editar.facebookEmpresa=response.data.FacebookEmpresa
        this.editar.twitterEmpresa=response.data.TwitterEmpresa
        this.editar.instagramEmpresa=response.data.InstagramEmpresa
        this.editar.whatsappEmpresa=response.data.WhatsappEmpresa
        this.editar.videoYoutubeEmpresa=response.data.VideoYoutubeEmpresa
      }).catch(errors => {

      });
    },




  },
  computed: {




  }
};
</script>

</style>
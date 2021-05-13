<template>
  <div >
   <section class="counts  mb-4 section-header" style="">
    <div class="container">

      <div class="text-center  p-2 mt-4">
        <h3 class="mb-4 text-white">Actividades</h3>
        <p class="mt-2 text-white">Aquí puede conocer las actividades que hemos realizado.</p>
        

      </div>

    </div>
  </section>
  
  <div
  v-for="(item, index) in actividades"
  :key="index"
  class="container  p-3 mt-4 mb-4  border  align-items-stretch  bg-light box"
  >

  <div class="card shadow-sm border-actividad" >
    <div class="card-header bg-white">
      <h6>{{item.TituloActividad}}</h6>
    </div>
    <div class="card-body">

      <p  v-if="item.DescripcionActividad.length<150" v-html="item.DescripcionActividad"></p>
      <p v-else v-html="item.DescripcionActividad.substring(0,150)+'...'"></p>
      <router-link class="btn-sm btn btn-warning float-right"  :to="'/actividades/'+item.slug" ><i class="fa fa-eye"></i>  Ver más</router-link>
    </div>
    <div class="card-footer text-muted bg-white">
      <i class="fa fa-clock-o"> {{fechaFormateada(item.created_at)}}</i>
    </div> 
  </div>
</div>
</div>
</template>

<script>

  import moment from 'moment';
  moment.locale('es-co');
  export default {

    mounted() {
      this.getActividades();  
   //this.$loading(true) loading para cargar en filtros
 },
 data() {
  return {
    actividades:[],
    
  }
},
methods: {
 fechaFormateada(fecha){
  return moment(fecha).format("D, MMMM YYYY");
},

getActividades() {
  axios.get('/api/web/actividades')
  .then(response => {
    this.actividades = response.data;

  })
  .catch(errors => {

  });

},
imagenFondo(imagen){
  return "background-image: url('"+imagen+"')";

}
}
}
</script>

<style>
  .border-actividad{
    border-left: solid 2px orange}
  </style>
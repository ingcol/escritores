<template>
  <div >
  <section id="about" class="services b-white">
    <div class="container shadow-none">
       <div class="icon-box" >
            <div class="icon"><i class="fa fa-users"></i></div>
            <div class="section-title">
            <h2 class="text-center">Llanotics</h2>
           
          </div>
            
            <div class="description" v-html="nosotros">Clases prácticas, concretas y enfocadas en las habilidades de mayor demanda laboral. Clases prácticas, concretas y enfocadas en las habilidades de mayor demanda laboral.Clases prácticas, concretas y enfocadas en las habilidades de mayor demanda laboral.</div>
          </div>

          </div>
  </section><!-- End About Us Section -->
</div>
</template>

<script>

  import moment from 'moment';
  moment.locale('es-co');
  export default {

    mounted() {
      this.getDatos();
   //this.$loading(true) loading para cargar en filtros
 },
 data() {
  return {
    nosotros:'',
  }
},
methods: {
 

getDatos() {
  axios.get('/api/web/nosotros')
  .then(response => {
    this.nosotros = response.data.NosotrosEmpresa;
   

  })
  .catch(errors => {

  });

},

}
}
</script>
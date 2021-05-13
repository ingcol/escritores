<template>
	<div>
   <section class="counts bg-white">
    <div class="container">
      <div class="section-title mb-4 border-bottom">
        <h2 class="text-left">Aliados</h2>


      </div>

      <div class="row my-flex-card">

        <div class="col-lg-3 col-md-6 text-center " data-aos="fade-up"  v-for="data in aliados">
          <div class="count-box border-aliado">
            <img class="img-aliado" :src="data.file_url" v-if="data.file_url">
            <img v-else src="assets/images/aliado.png" class="img-aliado">
            <p class="mt-1">{{data.NombreAliado}} </p>
          </div>
        </div>



      </div>

    </div>
  </section><!-- End Counts Section -->
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
    aliados:[],
  }
},
methods: {


  getDatos() {
    axios.get('/api/web/aliados')
    .then(response => {
      this.aliados = response.data;


    })
    .catch(errors => {

    });

  },

}
}
</script>

<style>
  
  .img-aliado{
    border-radius:100%; 
            height: 60px; border: solid 2px #ddd;
            width: 60px; 
  }
  .border-aliado{

    border-left: solid  2px orange

  }

</style>
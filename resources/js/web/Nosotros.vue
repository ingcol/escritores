<template>
  <div >
   <section class="counts  mb-1 section-header" style="">
    <div class="container" >

      <div class="text-center  p-2 mt-4">
        <h3 class="mb-4 text-white">Llanotic</h3>
        
      </div>

    </div>
  </section>
  
  <section id="about" class="about">
    <div class="container" style="box-shadow: none;">

      <div class="row no-gutters">


        <div class="col-lg-6 d-flex flex-column justify-content-center about-content">

          <div class="section-title mb-4">
            <h2 class="text-left">Nosotros</h2>
            <div v-html="nosotros"></div>
            
          </div>

          <div class="icon-box" v-if="mision" >
            <div class="icon"><i class="fa fa-users"></i></div>
            <h4 class="title"><a href="">Misión</a></h4>
            <div class="description" v-html="mision"></div>
          </div>

          <div class="icon-box" v-if="vision" >
            <div class="icon"><i class="fa fa-arrow-circle-up "></i></div>
            <h4 class="title"><a href="">Visión</a></h4>
            <div class="description" v-html="vision"></div>
          </div>

          <div class="icon-box" v-if="valores" >
            <div class="icon"><i class="fa fa-handshake-o"></i></div>
            <h4 class="title"><a href="">Valores</a></h4>
            <div v-html="valores" class="description"></div>
          </div>

        </div>


        <div class="col-lg-6 video-box">
          <br><br>
          <br>
      
          <iframe width="100%" height="315" class="mt-5" :src="'https://www.youtube.com/embed/'+videoId" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          
        </div>
        

        
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
    mision:'',
    vision:'',
    valores:'',
    videoId: ''
    
  }
},
methods: {


  getDatos() {
    axios.get('/api/web/nosotros')
    .then(response => {
      this.nosotros = response.data.NosotrosEmpresa;
      this.mision=response.data.MisionEmpresa
      this.vision=response.data.VisionEmpresa
      this.valores=response.data.ValoresEmpresa
      this.videoId=response.data.VideoYoutubeEmpresa

    })
    .catch(errors => {

    });

  },
  playVideo() {
    this.player.playVideo()
  },
  playing() {
    console.log('\o/ we are watching!!!')
  }

},
computed: {
  player() {
    return this.$refs.youtube.player
  }
}
}
</script>
<template>
  <div>
   <section id="hero">
    <div class="hero-container">
      <div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">

        <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

        <div class="carousel-inner" role="listbox">

          <!-- Slide 1 -->
          <div v-for="(item,index) in sliders" class="carousel-item" :class="{ active: index==0 }"  :style="imagenFondo(item.file_url)"


          >
          <div class="carousel-container">
            <div class="carousel-content container">
              <h2 class="animate__animated animate__fadeInDown">{{item.TituloSlider}}</h2>

              <center>

                <p class="text-center">{{item.DescripcionSlider}}</p>
              </center>


            </div>
          </div>
        </div>




      </div>

      <a class="carousel-control-prev " href="#heroCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon fa fa-angle-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon fa fa-angle-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>

    </div>
  </div>
</section><!-- End Hero -->
<galeria-web/>

</div>
</template>

<script>

import SliderComponent from '../components/web/Slider'
import BodyComponent from '../components/web/Body'
import FooterComponent from '../components/web/Footer'

export default {
  components: {
    SliderComponent,
    BodyComponent,
    FooterComponent
   
  },
  mounted() {
    this.getSliders();  
   //this.$loading(true) loading para cargar en filtros
 },
 data() {
  return {
    sliders:[],
    
    }
  },
  methods: {
  getSliders() {
    axios.get('/api/web/slider')
    .then(response => {
      this.sliders = response.data;
      
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
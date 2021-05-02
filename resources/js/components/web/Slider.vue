<template>
 <div>
   <section id="hero">
    <div class="hero-container">
      <div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">

        <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

        <div class="carousel-inner" role="listbox">

          <!-- Slide 1 -->
          <div class="carousel-item active" style="background-image: url('assets/images/tec.jpg');">
            <div class="carousel-container">
              <div class="carousel-content container">
                <h2 class="animate__animated animate__fadeInDown">{{varr}}Bienvenido 1<span>Mamba</span></h2>

                <center>

                <p class="text-center">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                 </center>
                

              </div>
            </div>
          </div>

          <div class="carousel-item " style="background-image: url('assets/images/tec1.jpg');">
            <div class="carousel-container">
              <div class="carousel-content container">
                <h2 class="animate__animated animate__fadeInDown">Otro slider <span>Mamba</span></h2>

                <center>

                <p class="text-center">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
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
</div>


</template>
<script>

</script>

<script>



  export default {
  
  mounted() {
    alert()
   this.getSliders();
   //this.$loading(true) loading para cargar en filtros
 },
 data() {
  return {
    sliders:[],
    varr:'Hola'
  }
},

methods: {
  getSliders() {
    axios.get('/api/slider')
  .then(response => {
    this.sliders = response.data;
    console.log(response.data);
  })
  .catch(errors => {

  });
   
 },
 }

}


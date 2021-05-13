<template>
	<div>
		<section id="services" class="services bg-light" v-if="imgs.length">
			<div class="container">

				<div class="section-title mb-4 border-bottom">
					<h2 class="text-left">Actividades</h2>


				</div>
				<div class="row my-flex-card">
					<div
					v-for="(src, index) in imgs"
					:key="index"
					class="col-md-4 mb-4  pointer"
					@click="() => showImg(index)">
					<div class="box-img border bg-white p-4">
						<center>
					<img :src="src" class="img-thumbnail height-img border-0 text-center">
					</center>
					</div>
				</div>
			</div>
		</div>
	</section>
	<vue-easy-lightbox
	:visible="visible"
	:imgs="imgs"
	@hide="handleHide"
	:index="index"
	></vue-easy-lightbox>
</div>
</template>

<script>
//import Ejemplo from './Algo'
import VueEasyLightbox from 'vue-easy-lightbox'


export default {
	components: {

		VueEasyLightbox
	},
	mounted() {
		this.getGalerias();  
   //this.$loading(true) loading para cargar en filtros
},
data() {
	return {
		sliders:[],
		imgs:[],
		visible: false,
      index: 0   // default

  }
},
methods: {
	showImg (index) {

		this.index = index
		this.visible = true
	},
	handleHide () {
		this.visible = false
	}, 
	getGalerias() {
		axios.get('/api/web/galeria')
		.then(response => {

			for(let item in response.data){

				this.imgs.push(response.data[item].file_url);

			}
			

		})
		.catch(errors => {

		});

	},

}
}
</script>

<style>
	.pointer{
		cursor: pointer;
	}

	.my-flex-card > div > div.box-img {
    height: calc(100% - 15px);
    margin-bottom: 15px;
}

.height-img{
	max-height: 220px;
}
.box-img{
	background-color: white
}
	

</style>
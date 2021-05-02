<template>
	<div>
		<section id="services" class="services" v-if="imgs.length">
			<div class="container">

				<div class="section-title text-left">
					<h3>Actividades</h3>
					<hr>
				</div>
				<div class="row">
					<div
					v-for="(src, index) in imgs"
					:key="index"
					class="col-md-4 mb-4"
					@click="() => showImg(index)" style="cursor: pointer;"
					>
					<img :src="src" class="img-thumbnail">
				</div>
			</div>
		</div>
	</section>
	<vue-easy-lightbox
	:visible="visible"
	:imgs="imgs"
	@hide="handleHide"
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
		;
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
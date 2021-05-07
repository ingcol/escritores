<template>
	<div>
		<div >
			<section class="counts  mb-4 section-header" style="">
				<div class="container">

					<div class="text-left  p-2 mt-4">
						<h3 class="text-white">{{tituloActividad}}</h3>
						
					</div>

				</div>
			</section>
		</div>
		<div class="container mb-2">
			<span v-if="creado" class="mb-4"><strong>{{fechaFormateada(creado)}}</strong> </span>

			<div v-html="descripcionActividad" class="text-justify mt-4"></div>
			

		</div>


		<div class="container" v-if="imgs.length">
			<div class="row">
				<div
				v-for="(src, index) in imgs"
				:key="index"
				class="col-md-4 mb-4 d-flex align-items-stretch pointer"
				@click="() => showImg(index)" 					>
				<img :src="src" class="img-thumbnail img-height">
			</div>
		</div>
	</div>
	<vue-easy-lightbox
	:visible="visible"
	:imgs="imgs"
	@hide="handleHide"
	:index="index"
	></vue-easy-lightbox>
</div>


</template>
<script>
	import VueEasyLightbox from 'vue-easy-lightbox'
	import axios from 'axios';
	import moment from 'moment';
	moment.locale('es-co');
	export default {
		components: {

			VueEasyLightbox
		},
		props:{

		},
		mounted(){

			this.getDetalleActividad();
		},
		data() {


			return {
				datos:'',
				imgs:[],
				visible: false,
                index: 0,   // default
                tituloActividad:'',
                descripcionActividad:'',
                creado:''




            }
        },

        methods: {
        	fechaFormateada(fecha){
        		return moment(fecha).format("D, MMMM YYYY");
        	},
        	showImg (index) {

        		this.index = index
        		this.visible = true
        	},
        	handleHide () {
        		this.visible = false
        	}, 
        	getDetalleActividad(){

        		let slug=this.$route.params.slug





        		let url='/api/web/actividad/'+slug;



        		axios.get(url).then(response=>{

        			this.tituloActividad=response.data.actividad.TituloActividad
        			this.descripcionActividad=response.data.actividad.DescripcionActividad
        			this.creado=response.data.actividad.created_at
        			
        			for(let item in response.data.imagenes){

        				this.imgs.push(response.data.imagenes[item].file_url);

        			}

        			console.log('imagenes:',this.imgs);


        		}).catch(errors => {



        		});

        	}

        },
    };
</script>

<style >
	.carousel-item{
		height: 400px;
		width: 100%;
	} 
	.carousel-item img{
		min-height: 400px;
		height: 100%;

	}
	.section-header{
		background-position: center center;background-repeat: no-repeat;background-attachment: fixed;background-size: cover; background-color: #888;
        background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://llanotic.s3.amazonaws.com/actividades/section-kalu.jpg);
		height: 200px; 

	}
.img-height{
	max-height: 300px;
	max-width: 300px;
}
	

</style>
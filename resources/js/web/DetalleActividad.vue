<template>
	<div>
		<div>
			<section class="counts  mb-4 section-header" style="">
				<div class="container">

					<div class="text-center  p-2 mt-4">
						<h3 class="text-white">{{tituloActividad}}</h3>
						
					</div>

				</div>
			</section>
		</div>
		<div   class="content-load"  v-if="!creado">
			<section class="counts  mb-1  mt-5" style="" v-if="Error">
				<div class="page-wrap  d-flex flex-row align-items-center">
					<div class="container">
						<div class="row justify-content-center">
							<div class="col-md-12 text-center">
								<span class="display-1 d-block">404</span>
								<div class="mb-4 lead">Página no encontrada</div>
								<router-link  class="btn btn-link"to="/"> Inicio</router-link>

							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
		<div class="container mb-2">
			<span v-if="creado" class="mb-4"><strong>{{fechaFormateada(creado)}}</strong> </span>

			<div v-html="descripcionActividad" class="text-justify mt-4"></div>
			

		</div>


		<div class="container" v-if="imgs.length">
			<div class="row  my-flex-card">
				<div
				v-for="(src, index) in imgs"
				:key="index"
				class="col-md-4 mb-4  pointer"
				@click="() => showImg(index)" >
				<div class="box-img-detail border p-4">
					<center>
						<img :src="src" class="img-thumbnail img-height">
					</center>
				</div>
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
                creado:'',
                Error:false




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

        			


        		}).catch(errors => {

        			if (errors) {
        				this.Error=true
        			}



        		});

        	}

        },
    };
</script>
<style >
	.my-flex-card > div > div.box-img-detail {
		height: calc(100% - 15px);
		margin-bottom: 15px;
	}
	.box-img-detail{
		background-color:#f9f9f9
	}
</style>

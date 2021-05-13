<template>
	<div>
		<section class="counts  mb-4 section-header" style="">
			<div class="container">

				<div class="text-center  p-2 mt-4">
					<h3 class="mb-4 text-white">Contáctenos</h3>



				</div>

			</div>
		</section>
		<section id="contact" class="contact ">
			<div class="container">

				<div class="section-title mb-2">
					<p class="text-center">Si tiene alguna duda o requiere mayor información sobre llanotic, puede contactarnos a través de los siguientes datos.</p>
				</div>

				<div class="row">

					<div class="col-lg-4 d-flex align-items-stretch" data-aos="fade-up">
						<div class="info-box border">
							<i class="fa fa-map"></i>
							<h3>Dirección</h3>
							<p>{{direccionEmpresa}}</p>
						</div>
					</div>

					<div class="col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
						<div class="info-box border">
							<i class="fa fa-envelope"></i>
							<h3>Correo</h3>
							<p>{{emailEmpresa}}<br></p>
						</div>
					</div>

					<div class="col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
						<div class="info-box border">
							<i class="fa fa-phone"></i>
							<h3>Teléfono</h3>
							<p>{{telefonoEmpresa}}</p>
						</div>
					</div>

					<div class="col-lg-12 border p-3" >

						<div class="form-row">
							<div class="col-lg-6 form-group">
								<input type="text" v-model="contacto.nombres"  name="name" class="form-control" placeholder="Nombres" />
								<div class="validate"></div>
							</div>
							<div class="col-lg-6 form-group">
								<input type="number" v-model="contacto.telefono" class="form-control" min="0"  placeholder="Teléfono" />
								<div class="validate"></div>
							</div>
						</div>
						<div class="form-group">
							<input type="text" class="form-control" name="subject"  placeholder="Asunto" v-model="contacto.asunto"   />
							<div class="validate"></div>
						</div>
						<div class="form-group">
							<textarea v-model="contacto.mensaje" class="form-control" name="message" rows="5" data-rule="required" placeholder="Mensaje"></textarea>
							<div class="validate"></div>
						</div>

						<div class="text-center"><button @click="enviarMensaje" :disabled="disable"  type="submit" class="btn btn-success"><i class="display-loading"> <vue-loading  type="spin" v-if="loading" color="red"  :size="{ width: '30px', height: '2px' }"></vue-loading></i>  Enviar</button></div>
						
					</div>

				</div>

			</div>
		</section><!-- End Contact Us Section -->

	</div>
</template>

<script>
	import { VueLoading } from 'vue-loading-template'
	import moment from 'moment';
	moment.locale('es-co');
	export default {
		components: {
			VueLoading
		},

		mounted() {
			this.getDatos();
			
   //this.$loading(true) loading para cargar en filtros
},
data() {
	return {

		loading:false,
		disable:false,

		telefonoEmpresa:'',
		emailEmpresa:'',
		direccionEmpresa:'',
		contacto:{
			telefono:'',
			nombres:'',
			asunto:'',
			mensaje:''
		}
		
	}
},
methods:{

	limpiarCampos(){
		this.contacto.telefono=''
		this.contacto.nombres=''
		this.contacto.asunto=''
		this.contacto.mensaje=''

	},
	mensajeGuardado(){
		this.$toastr.Add({
			name: "UniqueToastName", 
			title: "¡Hecho!", 
			msg: "Mensaje enviado exitosamente", 
			clickClose: false, 
			timeout: 5000, 
			position: "toast-top-right", 
			type: "success", 
			preventDuplicates: true,
		});
	},
	mensajeError(error){
		for(let value in error.response.data.errors){

			this.$toastr.Add({
				name: "UniqueToastName", 
				title: "¡Error!", 
				msg: error.response.data.errors[value][0], 
				clickClose: false, 
				timeout: 8000, 
				position: "toast-top-right", 
				type: "error", 
				preventDuplicates: true,
			});

		}
	},

	enviarMensaje(){
		this.disable=true
		this.loading=true

		let formData={
			ContactoTelefono:this.contacto.telefono,
			ContactoNombres:this.contacto.nombres,
			ContactoAsunto:this.contacto.asunto,
			ContactoMensaje:this.contacto.mensaje
		}


		axios.post('/api/web/contactenos', formData,)
		.then(response => {
			this.loading=false
			this.disable=false
			this.mensajeGuardado();
			this.limpiarCampos();
			
		}).catch(error => {
			this.disable=false
			this.loading=false
			this.mensajeError(error);
		});



	},

	getDatos() {
		axios.get('/api/web/nosotros')
		.then(response => {
			
			this.telefonoEmpresa=response.data.TelefonoEmpresa
			this.emailEmpresa=response.data.EmailEmpresa
			
			this.direccionEmpresa=response.data.DireccionEmpresa
			



		})
		.catch(errors => {

		});

	},

}
}
</script>

<style >

	.display-loading{
		display:inline-block;
	}	

</style>
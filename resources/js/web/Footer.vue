<template>
	<div>
	<footer id="footer" class="mt-5">
		<div class="footer-top">
			<div class="container">
				<div class="row">

					<div class="col-md-4 footer-links">
						<h4 v-text="nombreEmpresa"></h4>
						<p>
							<strong>Dirección: </strong> {{direccionEmpresa}}<br>
						</p>

					</div>

					<div class="col-md-4 footer-links">
						<h4>Siguenos</h4>
						<div class="social-links mt-3">
							<a :href="twitterEmpresa" target="blank"class="twitter"><i class="fa fa-twitter"></i></a>
							<a :href="facebookEmpresa" target="blank"class="facebook"><i class="fa fa-facebook"></i></a>
							<a :href="instagramEmpresa" target="blank"class="instagram"><i class="fa fa-instagram"></i></a>
						</div>

					</div>

					<div class="col-md-4 footer-links">
						<h4>Contacto</h4>
						<strong>Teléfono: </strong>{{telefonoEmpresa}}<br>
						<strong>Email: </strong> {{emailEmpresa}}<br>

					</div></div>
				</div>
			</div>

			<div class="container">
				<div class="copyright">
					&copy; Copyright <strong><span>Llanotic</span></strong>
				</div>

			</div>
		</footer><!-- End Footer -->

		<a :href="'https://api.whatsapp.com/send?phone=57'+whatsappEmpresa+'&text=Hola,me gustaría obtener mayor información'" class="whatsapp" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>

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
		telefonoEmpresa:'',
		emailEmpresa:'',
		nombreEmpresa:'',
		direccionEmpresa:'',
		twitterEmpresa:'',
		facebookEmpresa:'',
		instagramEmpresa:'',
		whatsappEmpresa:'',
	}
},
methods: {


	getDatos() {
		axios.get('/api/web/nosotros')
		.then(response => {
			this.nosotros = response.data.NosotrosEmpresa;
			this.telefonoEmpresa=response.data.TelefonoEmpresa
			this.emailEmpresa=response.data.EmailEmpresa
			this.nombreEmpresa=response.data.NombreEmpresa
			this.direccionEmpresa=response.data.DireccionEmpresa
			this.twitterEmpresa=response.data.TwitterEmpresa
			this.facebookEmpresa=response.data.FacebookEmpresa
			this.instagramEmpresa=response.data.InstagramEmpresa
			this.whatsappEmpresa=response.data.WhatsappEmpresa



		})
		.catch(errors => {

		});

	},

}
}
</script>
<style >
.whatsapp {
  position: fixed;
    width: 50px;
    height: 50px;
    bottom: 40px;
    right: 40px;
    background-color: #25d366;
    color: #FFF;
    border-radius: 50%;
    text-align: center;
    font-size: 26px;
    z-index: 100;
}

.whatsapp-icon {
  margin-top:13px;
}

</style>
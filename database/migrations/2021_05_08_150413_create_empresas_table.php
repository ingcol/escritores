<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmpresasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('empresas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('NombreEmpresa');
            $table->string('NitEmpresa');
            $table->string('EsloganEmpresa')->nullable();
            $table->bigInteger('TelefonoEmpresa');
            $table->string('DireccionEmpresa');
            $table->string('HorarioAtencionEmpresa')->nullable();
            $table->longText('NosotrosEmpresa');
            $table->longText('MisionEmpresa')->nullable();
            $table->longText('VisionEmpresa')->nullable();
            $table->longText('ValoresEmpresa')->nullable();
            $table->longText('EmailEmpresa')->nullable();
            $table->string('FacebookEmpresa')->nullable();
            $table->string('TwitterEmpresa')->nullable();
            $table->string('InstagramEmpresa')->nullable();
            $table->bigInteger('WhatsappEmpresa')->nullable();
            $table->string('VideoYoutubeEmpresa')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('empresas');
    }
}

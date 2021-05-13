<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAliadosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aliados', function (Blueprint $table) {
            $table->id();
            $table->string('NombreAliado');
           $table->string('EstadoAliado');
            $table->string('file')->nullable();
            $table->string('file_name')->nullable();
            $table->string('file_type')->nullable();
            $table->string('file_url')->nullable();
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
        Schema::dropIfExists('aliados');
    }
}

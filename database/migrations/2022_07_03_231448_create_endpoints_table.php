<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('endpoints', function (Blueprint $table) {
            $content_types = [
                'application/EDI-X12',
                'application/EDIFACT',
                'application/javascript',
                'application/octet-stream',
                'application/ogg',
                'application/pdf',
                'application/xhtml+xml',
                'application/x-shockwave-flash',
                'application/json',
                'application/ld+json',
                'application/xml',
                'application/zip',
                'application/x-www-form-urlencoded',
                'audio/mpeg',
                'audio/x-ms-wma',
                'audio/vnd.rn-realaudio',
                'audio/x-wav',
                'image/gif',
                'image/jpeg',
                'image/png',
                'image/tiff',
                'image/vnd.microsoft.icon',
                'image/x-icon',
                'image/vnd.djvu',
                'image/svg+xml',
                'multipart/mixed',
                'multipart/alternative',
                'multipart/related',
                'multipart/form-data',
                'text/css',
                'text/csv',
                'text/html',
                'text/javascript (obsolete)',
                'text/plain',
                'text/xml',
                'video/mpeg',
                'video/mp4',
                'video/quicktime',
                'video/x-ms-wmv',
                'video/x-msvideo',
                'video/x-flv',
                'video/webm',
                'application/vnd.oasis.opendocument.text',
                'application/vnd.oasis.opendocument.spreadsheet',
                'application/vnd.oasis.opendocument.presentation',
                'application/vnd.oasis.opendocument.graphics',
                'application/vnd.ms-excel',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'application/vnd.ms-powerpoint',
                'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'application/vnd.mozilla.xul+xml'
            ];
            $colorsCollection = ['#69cd91', '#61affd', '#f3a02e', '#ea473b'];
            $methods = ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'CONNECT', 'OPTIONS', 'TRACE'];

            $table->id();
            $table->string('endpoint');
            $table->string('description');
            $table->foreignId('product_id')
                ->constrained()
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->enum('method', $methods)->default('GET');
            $table->enum('bg_color', $colorsCollection)->default('#69cd91');
            $table->enum('response_content_type', $content_types)->default('application/json');
            $table->enum('parameters_content_type', $content_types)->default('application/json');
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
        Schema::dropIfExists('documentations');
    }
};

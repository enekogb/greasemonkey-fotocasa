// ==UserScript==
// @name        Fotocasa Listado Mejorado
// @namespace   https://github.com/enekogb/greasemonkey-fotocasa
// @description Mejoras en eel listado de Fotocasa
// @include     http://www.fotocasa.es/*/listado
// @version     1.0
// @grant       none
// ==/UserScript==

// Obtenemos el jquery que usa la pagina
var $, jQuery;
$ = jQuery = window.jQuery;

// Annadimos el css de FontAwesome a la pagina
// $("head link[rel='stylesheet']").last().after("<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css' type='text/css' media='screen'>");

// Buscamos las filas del listado de resultados
$('#search-listing').find('tr [data-adid]').each(function(index) {
  console.log($(this));
});

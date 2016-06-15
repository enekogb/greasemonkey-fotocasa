// ==UserScript==
// @name        Fondotop Portfolio Mejorado
// @namespace   https://github.com/enekogb/monkeystar
// @description Mejoras en el portfolio de Fondotop
// @include     https://www.fondotop.com/fondotop*MAIN10
// @version     1.0.6
// @grant       none
// ==/UserScript==

// Obtenemos el jquery que usa la pagina
var $, jQuery;
$ = jQuery = window.jQuery;

// Annadimos el css de FontAwesome a la pagina
$("head link[rel='stylesheet']").last().after("<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css' type='text/css' media='screen'>");

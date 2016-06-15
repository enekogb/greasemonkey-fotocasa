// ==UserScript==
// @name        Fotocasa Listado Mejorado
// @namespace   https://github.com/enekogb/greasemonkey-fotocasa
// @description Mejoras en eel listado de Fotocasa
// @include     /^https?://www\.fotocasa\.es/.*/listado.*$/
// @version     1.0
// @grant       none
// ==/UserScript==

// Obtenemos el jquery que usa la pagina
var J;

// Add jQuery
(function(){
  if (typeof unsafeWindow.jQuery == 'undefined') {
    var GM_Head = document.getElementsByTagName('head')[0] || document.documentElement,
    GM_JQ = document.createElement('script');
    
    GM_JQ.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
    GM_JQ.type = 'text/javascript';
    GM_JQ.async = true;
    
    GM_Head.insertBefore(GM_JQ, GM_Head.firstChild);
  }
  GM_wait();
})();

// Check if jQuery's loaded
function GM_wait() {
  if (typeof unsafeWindow.jQuery == 'undefined') {
    window.setTimeout(GM_wait, 100);
  } else {
    J = unsafeWindow.jQuery.noConflict(true);
    letsJQuery();
  }
}

// All your GM code must be inside this function
function letsJQuery() {
  console.log('Ejecutando userscript...');
  console.log(J('#search-listing'));
  console.log(J().jquery); // check jQuery version
}

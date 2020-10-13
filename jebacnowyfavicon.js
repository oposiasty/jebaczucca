// ==UserScript==
// @name           jebaczucca
// @description    jebanykutas
// @include        https://*.messenger.com/*
// ==/UserScript==

var favicon_link_html = document.createElement('link');
favicon_link_html.rel = 'icon';
favicon_link_html.href = 'https://raw.githubusercontent.com/oposiasty/jebaczucca/main/poop-shit-poo-cream-ice-2_108504.ico';
favicon_link_html.type = 'image/x-icon';

try { 
  document.getElementsByTagName('head')[0].appendChild( favicon_link_html ); 
}
catch(e) { }

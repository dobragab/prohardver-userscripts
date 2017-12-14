// ==UserScript==
// @name         Topikgazda Patch
// @version      2.2
// @description  Topikgazda topikban túl sok a topikgazda
// @author       dfintha, dobragab
// @include      *prohardver.hu/tema/topikgazda_topik*
// @include      *itcafe.hu/tema/topikgazda_topik*
// @include      *logout.hu/tema/topikgazda_topik*
// @include      *mobilarena.hu/tema/topikgazda_topik*
// @include      *gamepod.hu/tema/topikgazda_topik*
// @include      *fototrend.hu/tema/topikgazda_topik*
// @include      *prohardver.hu/tema/topikgazda_offtopik*
// @include      *itcafe.hu/tema/topikgazda_offtopik*
// @include      *logout.hu/tema/topikgazda_offtopik*
// @include      *mobilarena.hu/tema/topikgazda_offtopik*
// @include      *fototrend.hu/tema/topikgazda_offtopik*
// @updateURL    https://raw.githubusercontent.com/dobragab/prohardver-userscripts/master/topikgazda_lista.user.js
// @grant        none
// @require      https://raw.githubusercontent.com/dobragab/prohardver-userscripts/master/responsive_sites.js

// ==/UserScript==
(function() {
    'use strict';

    var tgDiv = ph_is_site_responsive(window.location.hostname) ? "thread-users-list" : "thrusers";

    var thrUsers = document.getElementById("right").getElementsByClassName(tgDiv)[0];
    var thrList = thrUsers.getElementsByTagName("ul")[0];
    var num = thrList.children.length - 1;

    while (thrList.firstChild) {
        thrList.removeChild(thrList.firstChild);
    }

    var node = document.createElement("li");
    node.appendChild(document.createTextNode(num + " fő"));
    thrList.appendChild(node);
})();

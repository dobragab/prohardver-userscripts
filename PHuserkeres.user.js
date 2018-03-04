// ==UserScript==
// @name         PHuserkeres
// @namespace    https://www.prohardver.hu/
// @version      1.1
// @description  PH "felhasználó hozzászólásainak keresése" gomb
// @author       dobragab
// @include      https://prohardver.hu/tema/*
// @include      https://mobilarena.hu/tema/*
// @include      https://itcafe.hu/tema/*
// @include      https://logout.hu/tema/*
// @include      https://gamepod.hu/tema/*
// @updateURL    https://raw.githubusercontent.com/dobragab/prohardver-userscripts/master/PHuserkeres.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var headers = document.getElementsByClassName("hlist head flc");

    for(var i = 0; i < headers.length; ++i)
    {
        var header = headers[i];
        var namenode = header.getElementsByTagName("P")[0].getElementsByTagName("A");

        if(namenode.length < 2)
            continue;

        var name = namenode[1].textContent;

        var list = header.getElementsByTagName("UL")[0];
        var uj = list.getElementsByTagName("LI")[0].cloneNode(true);
        var ujlink = uj.getElementsByTagName("A")[0];
        ujlink.href = "keres.php?suser=" + name;
        ujlink.title = name + " hozzászólásainak keresése a topikban";
        ujlink.innerHTML = "Keres";

        list.insertBefore(uj, list.children[list.children.length - 1]);
    }

})();

// ==UserScript==
// @name         PH Fordított kedvencek
// @namespace    https://prohardver.hu/
// @version      1.1
// @description  PH Kedvencek és Itt szóltam hozzá felsorolások megfordítása.
// @author       dobragab
// @include      https://prohardver.hu/tema/*
// @include      https://mobilarena.hu/tema/*
// @include      https://itcafe.hu/tema/*
// @include      https://logout.hu/tema/*
// @include      https://gamepod.hu/tema/*
// @updateURL    https://raw.githubusercontent.com/dobragab/prohardver-userscripts/master/PHforditott.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var box = document.getElementById("right").getElementsByClassName("usstuff")[0];

    var kedvencek = box.getElementsByTagName("ul");
    for (var j = 0; j < kedvencek.length; ++j)
    {
        var list = kedvencek[j];
        var i = list.childNodes.length;
        while (i--)
          list.appendChild(list.childNodes[i]);
    }
})();

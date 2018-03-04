// ==UserScript==
// @name         PHmodker
// @namespace    https://www.prohardver.hu/
// @version      1.0
// @description  PH "hozzászólás jelentése modkerben" gomb
// @author       dobragab
// @include      https://prohardver.hu/tema/*
// @include      https://mobilarena.hu/tema/*
// @include      https://itcafe.hu/tema/*
// @include      https://logout.hu/tema/*
// @include      https://gamepod.hu/tema/*
// @include      https://prohardver.hu/muvelet/hsz/uj.php*
// @include      https://mobilarena.hu/muvelet/hsz/uj.php*
// @include      https://itcafe.hu/muvelet/hsz/uj.php*
// @include      https://logout.hu/muvelet/hsz/uj.php*
// @include      https://gamepod.hu/muvelet/hsz/uj.php*
// @updateURL    https://raw.githubusercontent.com/dobragab/prohardver-userscripts/master/PHmodker.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function parse_query_string(query) {
        var vars = query.split("&");
        var query_string = {};
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            // If first entry with this name
            if (typeof query_string[pair[0]] === "undefined") {
                query_string[pair[0]] = decodeURIComponent(pair[1]);
                // If second entry with this name
            } else if (typeof query_string[pair[0]] === "string") {
                var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
                query_string[pair[0]] = arr;
                // If third or later entry with this name
            } else {
                query_string[pair[0]].push(decodeURIComponent(pair[1]));
            }
        }
        return query_string;
    }

    var re = /.*\.hu\/muvelet\/hsz\/uj.php\?thrid=2423281.*/g;
    if (window.location.href.match(re) !== null)
    {
        var textbox = document.forms[0].elements.namedItem("content");
        var modker_url = parse_query_string(window.location.search.substring(1)).modker_url;
        if (modker_url !== undefined)
            textbox.value = "Hozzászólás: [L:" + modker_url + "][link][/L]\n\n";
    }
    else
    {
        var headers = document.getElementsByClassName("hlist head flc");

        for(var i = 0; i < headers.length; ++i)
        {
            var header = headers[i];
            var namenode = header.getElementsByTagName("P")[0].getElementsByTagName("A");

            if(namenode.length < 2)
                continue;

            var link = namenode[0].href;

            var list = header.getElementsByTagName("UL")[0];
            var uj = list.getElementsByTagName("LI")[0].cloneNode(true);
            var ujlink = uj.getElementsByTagName("A")[0];
            ujlink.href = "https://logout.hu/muvelet/hsz/uj.php?thrid=2423281&modker_url=" + encodeURIComponent(link);
            ujlink.title = name + " hozzászólásainak keresése a topikban";
            ujlink.innerHTML = "Modker";

            list.insertBefore(uj, list.children[list.children.length - 1]);
        }
    }

})();


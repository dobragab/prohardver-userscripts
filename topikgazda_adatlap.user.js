// ==UserScript==
// @name         PHadatlapTG
// @version      1.1
// @description  Topikgazdák adatlapján megjelennek a topikjai
// @author       dobragab
// @include      *prohardver.hu/tag*
// @include      *itcafe.hu/tag*
// @include      *logout.hu/tag*
// @include      *mobilarena.hu/tag*
// @include      *gamepod.hu/tag*
// @updateURL    https://raw.githubusercontent.com/dobragab/prohardver-userscripts/master/topikgazda_adatlap.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var re = /(www\.)?(m\.)?(prohardver|mobilarena|gamepod|itcafe)\.hu\/tag\//g;

    if (window.location.href.match(re) !== null)
    {
        // hack: Same Origin Policy miatt at kell iranyitani az adatlapot Logoutra.
        window.location.href = window.location.href.replace(re, "logout.hu/tag/");
        return;
    }

    var username = document.forms[0].getElementsByTagName("H1")[0].textContent;

    var form = document.forms[0];
    var toBefore = form.nextSibling;

    function addItem(item)
    {
        var div = document.createElement("div");
        div.classList.add("full");
        div.appendChild(item);
        form.parentNode.insertBefore(div, toBefore);
    }

    function addItemInP(item)
    {
        var p = document.createElement("p");

        p.innerHTML = item;
        addItem(p);
    }

    var oReq = new XMLHttpRequest();
    oReq.onload = function(e)
    {
        var parser=new DOMParser();
        var htmlDoc=parser.parseFromString(oReq.responseText, "text/html");
        var body = htmlDoc.getElementsByClassName("defcnt cntnew")[0].children;
        for (var i = 0; i < body.length; ++i)
        {
            var par = body[i];
            var links = par.getElementsByTagName("A");
            if (links.length < 2)
                continue;

            var actualUser = links[0].textContent.trim();
            if (actualUser !== username)
                continue;

            var clone = par.cloneNode(true);

            while (clone.childNodes[0].textContent[0] !== "●")
                clone.removeChild(clone.firstChild);

            addItem(document.createElement("hr"));
            addItemInP("<b>Topikgazda</b>");
            addItem(clone);
        }
    };

    // hack: sync lekeres, hogy a link atiranyito script bevarja ezt.
    oReq.open("GET", "/bejegyzes/rios_gephaz/topikgazdak.html", false);
    oReq.send();

})();

// ==UserScript==
// @name          PROHARDVER! link redirecter
// @version       1.5
// @description   replaces prohardver.hu forum links
// @author        Intruder2k5, dobragab
// @namespace     https://prohardver.hu/
// @include       https://prohardver.hu/*
// @include       https://www.prohardver.hu/*
// @include       https://m.prohardver.hu/*
// @include       https://mobilarena.hu/*
// @include       https://www.mobilarena.hu/*
// @include       https://m.mobilarena.hu/*
// @include       https://gamepod.hu/*
// @include       https://www.gamepod.hu/*
// @include       https://m.gamepod.hu/*
// @include       https://itcafe.hu/*
// @include       https://www.itcafe.hu/*
// @include       https://m.itcafe.hu/*
// @include       https://logout.hu/*
// @include       https://www.logout.hu/*
// @include       https://m.logout.hu/*
// @updateURL     http://users.hszk.bme.hu/~dg1308/static/prohardver_link.user.js
// @grant         none
// ==/UserScript==

(function() {
    'use strict';
    var site1 = "prohardver.hu";

    function replace_links(elem) {
        var links = document.evaluate('//a[@href]', elem, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
        var re = /(www\.)?(m\.)?(prohardver|mobilarena|gamepod|itcafe|logout)\.hu\/(tema\/|temak\/|tag\/|tagok\/|privat\/|privatok\/|forum\/|allando\/|kereses\/)/g;
        var t = site1 + "/$4";
        for (var n = 0; n < links.snapshotLength; n++)
        {
            var link = links.snapshotItem(n);
            link.href = link.href.replace(re, t);
            if(link.href === "http://hardverapro.hu/privat_uzenetek")
                link.href = "http://" + site1 + "/privatok/listaz.php";
        }
    }

    // copied from PROHARDVER! source. If PH changes this piece of code, the script breaks PH.
    function my_ajax_openContent(url, obj, dCont) {
        return (dCont = document.getElementById(dCont)) ? (obj.ajaxCallback = function(req) {
            dCont.innerHTML = eval("(" + req.responseText + ")").content,
                setClass(dCont, "open", !0),
                this.parentNode.removeChild(this);
            replace_links(dCont);
        },obj.ajaxError = function(e) {}, void ajaxRequest(url, obj, 6e4)) : null;
    }

    replace_links(document);

    if (typeof GM === "undefined" || GM.info.scriptHandler !== "Greasemonkey")
        ajax_openContent = my_ajax_openContent;

})();

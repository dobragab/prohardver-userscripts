// ==UserScript==
// @name         "Itt szoltam hozza" lista torolt topikjainak eltavolitasa
// @namespace    https://www.prohardver.hu/
// @match        https://prohardver.hu/forum/*
// @match        https://prohardver.hu/tema/*
// @match        https://mobilarena.hu/forum/*
// @match        https://mobilarena.hu/tema/*
// @match        https://logout.hu/forum/*
// @match        https://logout.hu/tems/*
// @match        https://itcafe.hu/forum/*
// @match        https://itcafe.hu/tema/*
// @match        https://gamepod.hu/forum/*
// @match        https://gamepod.hu/tema/*
// @version      0.1
// @description  A torolt topik tenyleges torlesehez felhasznaloi megerosites kell.
// @author       milangfx
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// @updateURL    https://github.com/milangfx/prohardver-userscripts/raw/master/remove_deleted_threads.user.js
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(function() {
        $('.deleted').next().children('a').eq(1).click();
    });
})();

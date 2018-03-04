// ==UserScript==
// @name         PH_comment_backgroud
// @namespace    https://www.prohardver.hu/
// @match        https://prohardver.hu/tema/*
// @match        https://mobilarena.hu/tema/*
// @match        https://logout.hu/tema/*
// @match        https://itcafe.hu/tema/*
// @match        https://gamepod.hu/tema/*
// @version      0.1
// @description  A sajat es valasz hsz-ek szinenek valtoztatasa
// @author       milangfx
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// @updateURL    https://github.com/milangfx/prohardver-userscripts/raw/master/PH_comment_backgroud.user.js
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(function() {
        $('a:contains("milangfx")').filter(function(index){
            return $(this).text() === "milangfx";
        }).parent().parent().parent().css('background-color', '#bebebe');
    });
})();

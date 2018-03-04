// ==UserScript==
// @name         PHdragNdrop
// @namespace    https://www.prohardver.hu/
// @version      1.0
// @description  PH drag&drop image upload
// @author       dobragab
// @match         https://prohardver.hu/muvelet/tag_kep/uj.php*
// @match         https://mobilarena.hu/muvelet/tag_kep/uj.php*
// @match         https://itcafe.hu/muvelet/tag_kep/uj.php*
// @match         https://logout.hu/muvelet/tag_kep/uj.php*
// @match         https://gamepod.hu/muvelet/tag_kep/uj.php*
// @updateURL    https://raw.githubusercontent.com/dobragab/prohardver-userscripts/master/PHdragNdrop.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var form = document.forms[0];
    form.elements[1].style = "display:block"; // input type="file"
    form.elements[2].style = "display:none";  // input type="button"

    document.getElementsByClassName("file")[1].style = "display:none"; // label
})();

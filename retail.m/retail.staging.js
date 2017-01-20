// ==UserScript==
// @name         零售页面注入脚本
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://m.retail.st.sankuai.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log('零售页面注入脚本成功');
    window._setTime = setTimeout;
    window._setTime(function(){
        $('.list-group').show();
    }, 1000);
})();
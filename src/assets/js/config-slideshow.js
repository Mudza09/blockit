/* --------------------------------------------------------------------------
 * File        : config.js
 * Version     : 1.0
 * Author      : indonez
 * Author URI  : http://www.indonez.com
 *
 * Indonez Copyright 2020 All Rights Reserved.
 * -------------------------------------------------------------------------- 
 * javascript handle initialization
    1. Homepage uikit slideshow 
 * -------------------------------------------------------------------------- */

'use strict';

let slideshowApp = {
    //----------- 1. Homepage uikit slideshow -----------
    theme_homeSlideshow: function () {
        let slideshow = UIkit.slideshow('.in-slideshow', {
            autoplay: true,
            autoplayInterval: 7000,
            animation: 'scale',
            minHeight: 300,
            maxHeight: 438
        });
    },
    theme_init: function () {
        slideshowApp.theme_homeSlideshow();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    slideshowApp.theme_init();
});
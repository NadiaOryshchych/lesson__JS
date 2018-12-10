window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let tabs = require('./js/tabs'),
        timer = require('./js/timer'),
        modal = require('./js/modal'),
        form = require('./js/form'),
        slider = require('./js/slider'),
        calc = require('./js/calc');
    
    tabs();
    timer();
    modal();
    form();
    slider();
    calc();    
});
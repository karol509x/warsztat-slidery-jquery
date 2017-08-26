'use strict';

$(function(){
    //zmienne
    var slider = $('#slider');
    var slideShow = $('.slide-show');
    var slideCount = slideShow.children().length;
    var slideWidth = 100/slideCount;
    var slideIndex = 0;
    
    //Szerokość kontenera slideshow
    slideShow.css('width', slideCount * 100 + '%');
});
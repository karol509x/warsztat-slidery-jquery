'use strict';

$(function () {
    //zmienne
    var slider = $('#slider');
    var slideShow = $('.slide-show');
    var slideCount = slideShow.children().length;
    var slideWidth = 100 / slideCount;
    var slideIndex = 0;

    //funkcja animująca, której parametrem jest nowy index slidu
    function slide(newSlidendex) {
        if (newSlidendex < 0 || newSlidendex >= slideCount) {
            return;
        }
        var slideCaption = $('.slider-caption').eq(newSlideIndex);

        slideCaption.hide();

        var marginLeft = (newSlidendex * (-100)) + '%';

        //wywołanie animacji na elemencie slideshow, któa przesunie lewy margines równy zmiennej marginLeft
        slideShow.animate({
                'margin-left': marginLeft
            }, 800,
            function () {
                slideIndex = newSlidendex;
                slideCaption.fadeIn('slow');
            });

    }

    //Szerokość kontenera slideshow
    slideShow.css('width', slideCount * 100 + '%');


    //Iteracja po wszystkich slajdach i nadanie im marginesów oraz szerokości
    slideShow.find('.single-slide').each(function (index) {
        $(this).css({
            'width': slideWidth + '%',
            'margin-left': index * slideWidth + '%'
        });
    });

    //Przycisk poprzedni - wywołanie funkcji slide()
    $('.prev-slide').click(function () {
        slide(slideIndex - 1);
    });
    $('.prev-slide').click(function () {
        slide(slideIndex - 1);
    });
});
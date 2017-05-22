// FIDE 
$(window).scroll(function () {
        $(' .mov').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+600) {
                $(this).addClass('fadeInLeft');
            }
        });
    });﻿
$(window).scroll(function () {
    $(' .mov2').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+700) {
            $(this).addClass('fadeInRight');
        }
    });
});﻿
// FIDE
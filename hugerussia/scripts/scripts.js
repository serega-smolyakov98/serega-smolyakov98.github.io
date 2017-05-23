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

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() != 0) {
 
$('#up').fadeIn();
 
} else {
 
$('#up').fadeOut();
 
}
 
});
 
$('#up').click(function() {
 
$('body,html').animate({scrollTop:0},1000);
 
});
 
});
 
 $('.sl').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true
 });

 $(document).ready(function() {
  $('.your-class').slick({
    dots: true,
    dotsClass: "my-dots",
  });
});

 $('.sl2').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true
 });

 $(document).ready(function() {
  $('.your-class').slick({
    dots: true,
    dotsClass: "my-dots2",
  });
});


// FIDE 
$(window).scroll(function () {
        $(' .mov').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+700) {
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
$(window).scroll(function () {
    $(' .mov3').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+700) {
            $(this).addClass('fadeInUp');
        }
    });
});﻿
// FIDE

$(window).scroll(function(){
      if ($(this).scrollTop() > 50) {
          $('.header__bar').addClass('fixed');
      } else {
          $('.header__bar').removeClass('fixed');
      }
});

// $(document).ready(function(){
//     $("#menu").on("click","a", function (event) {
//         //отменяем стандартную обработку нажатия по ссылке
//         event.preventDefault();

//         //забираем идентификатор бока с атрибута href
//         var id  = $(this).attr('href'),

//         //узнаем высоту от начала страницы до блока на который ссылается якорь
//             top = $(id).offset().top;
        
//         //анимируем переход на расстояние - top за 1500 мс
//         $('body,html').animate({scrollTop: top}, 1500);
//     });
// });

// $(function() {
 
// $(window).scroll(function() {
 
// if($(this).scrollTop() != 0) {
 
// $('#up').fadeIn();
 
// } else {
 
// $('#up').fadeOut();
 
// }
 
// });
 
// $('#up').click(function() {
 
// $('body,html').animate({scrollTop:0},1000);
 
// });
 
// });
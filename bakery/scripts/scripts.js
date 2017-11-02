 new ElastiStack( document.getElementById( 'elasticstack' ) );
 
 $('.sl').slick({
 	autoplay: true,
 	autoplaySpeed: 5000,
 	dots: false,
 	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: false,
  	fade: true,
  	asNavFor: '.sl-2'
 });

  $('.sl-2').slick({
 	dots: false,
 	slidesToShow: 3,
 	slidesToScroll: 1,
  	focusOnSelect: true,
  	centerMode: true,
  	centerPadding: '15px',
  	prevArrow: '<button id="prev" type="button" class="btn btn-juliet"></button>',
    nextArrow: '<button id="next" type="button" class="btn btn-juliet"></button>',
    asNavFor: '.sl'
 });

$(function (){
    function onHover(evt/**$.Event*/){
        var delta = evt.type == 'mouseenter' ? '+=8' : '-=8';
        $(this).animate({
            width: delta,
            height: delta
        }, 120);
    }
    
    $(document).on('mouseenter mouseleave', '.on-hover', onHover);
});
 
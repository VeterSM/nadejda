// $(document).ready(function () {
$('.a-galery__border').slick({
    slidesToScroll: 1,
    asNavFor: '.slaid',
    infinite: true,
    slidesToShow: 1,
    arrow: false
	});
$('.slaid').slick({
    slidesToScroll: 1,
    asNavFor: '.a-galery__border',
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    prevArrow:'<div class="prevArrow"><div class="shev__left"><i class="fas fa-chevron-left"></i></div></div>',
	nextArrow:'<div class="nextArrow"><div class="shev__right"><i class="fas fa-chevron-right"></i></div></div>',
	responsive:
	[{
		breakpoint:769,
		settings:{
		slidesToShow:2,
		slidesToScroll:1,
	}},
	{
		breakpoint:540,
		settings:{
		slidesToShow:1,
		slidesToScroll:1
	}}
  ]
});

$(".photo").lightBox({
	overlayBgColor: '#353338',
	overlayOpacity: 0.6,
	imageLoading: 'img/ajax-loader.gif',
	imageBtnClose: 'img/close.png',
	imageBtnPrev: 'img/prev.png',
	imageBtnNext: 'img/next.png',
	containerResizeSpeed: 500,
	txtImage: 'Изображение',
	txtOf: 'из'
   });
$(".photo2").lightBox({
	overlayBgColor: '#353338',
	overlayOpacity: 0.6,
	imageLoading: 'img/ajax-loader.gif',
	imageBtnClose: 'img/close.png',
	imageBtnPrev: 'img/prev.png',
	imageBtnNext: 'img/next.png',
	containerResizeSpeed: 500,
	txtImage: 'Изображение',
	txtOf: 'из'
   });

//burger menu

    $('.burger').click(function () {
		$('.burger').toggleClass('v');
		$('.burger-menu').slideToggle( "slow", function() {
	    });
	 return true;

});
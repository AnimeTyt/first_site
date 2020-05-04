
$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:5,
		slidesToScroll:1,
		autoplay:true,
		speed:800,
		easing: 'ease',
		autoplaySpeed:4000,
		touchThreshold: 10,
		waitForAnimate: false,
		//centerMode: true,
		responsive:[
		 {
				breakpoint: 1101,
				settings: {
					slidesToShow:4
				}
			},
			{
				breakpoint: 950,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
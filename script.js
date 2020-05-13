
$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:5,
		slidesToScroll:1,
		slidesToScrollSpeed: 3000,
		autoplay:true,
		speed:300,
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


$(document).ready(function(){
	$(' .burger').click(function(event){
	  $('.burger,#about').toggleClass('active');
	  
	});
});
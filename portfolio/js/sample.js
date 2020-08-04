$(document).ready(function () {
	   
	//typeing animation
	(function () {
		$.fn.writeText = function (content) {
			var contentArray = content.split(""),
				current = 0,
				elem = this;
			setInterval(function () {
				if (current < contentArray.length) {
					elem.text(elem.text() + contentArray[current++]);
				}
			}, 100);

		};
	})(jQuery);
	//jQurey는 브라우저 상에서 php와 동작할 경우 제이쿼리로 동작하라는 표식이다.
	$('#holder').writeText('WEB DESIGNER + FONT+END DEVELOPER');


  // wow 애니메이션 
	new WOW().init();


 //push the body and the nav
	var main = function () {
		$('.fa-bars').click(function () {
			$('.nav-screen').animate({
				right: '0px'
			}, 200);
			$('body').animate({
				right: '285px'
			}, 200);
		});
		//fa-bars
		$('.fa-times').click(function () {
			$('.nav-screen').animate({
				right: '-285px'
			}, 200);
			$('body').animate({
				right: '0px'
			}, 200);
		});
		//fa-time end


		$('.nav-links a').click(function(){
				$('.nav-screen').animate({
					right: '-285px'
				}, 500);
				$('body').animate({
					right: '0px'
				}, 500);
		});
	


	};
	$(document).ready(main);




//fullpage
	$('#fullpage').fullpage({
		scrollBar: true,
		responsiveWidth: 400,
		navigation: true,
		navigationTooltips: ['Home', 'about', 'portfolio', 'contact', 'connect'],
		anchors: ['home', 'about', 'portfolio', 'contact', 'connect'],
		menu: '#myMenu',
		fitToSection: false,
		afterLoad: function (anchorLink, index) {
			var loadedSection = $(this);

			if (index == 1) {
				$('.fa-chevron-down').each(function () {
					$(this).css('opacity', '1');

				});
				$('.header-links a').each(function () {
					$(this).css('color', 'white');
				});
				$('.header-links').css('background-color', 'transparent');

				
			} else if (index !== 1) {
				$('.header-links a').each(function () {
					$(this).css('color', 'black');
				});
				$('.header-links').css('background-color', 'white');
			}



			//skill bar
			if (index == 2) {
				$('.skillbar').each(function () {
					$(this).find('.skillbar-bar').animate({
						width: $(this).attr('data-percent')
					}, 2500);
				});
			}
		}
	});
 // fullpage end

	//move section down

	$(document).on('click', '#moveDown', function () {
		$.fn.fullpage.moveSectionDown();
	});
	$(document).on('click', '#skills', function () {
		$.fn.fullpage.moveTo(2);
	});
	$(document).on('click', '#projects', function () {
		$.fn.fullpage.moveTo(3);
	});
	$(document).on('click', '#contact', function () {
		$.fn.fullpage.moveTo(4);
	});



});

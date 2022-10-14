






(function($){
    // ajax contact form
	$(function () {
		var form = $("#contact-form");
		var formMessages = $(".form-message");
		$(form).submit(function (e) {
			e.preventDefault();
			var formData = $(form).serialize();
			$.ajax({
				type: "POST",
				url: $(form).attr("action"),
				data: formData,
			})
				.done(function (response) {
					$(formMessages).removeClass("error");
					$(formMessages).addClass("success");
					$(formMessages).text(response);
					$("#contact-form input, #contact-form textarea").val("");
				})
				.fail(function (data) {
					$(formMessages).removeClass("success");
					$(formMessages).addClass("error");
					if (data.responseText !== "") {
						$(formMessages).text(data.responseText);
					} else {
						$(formMessages).text(
							"Oops! An error occured and your message could not be sent."
						);
					}
				});
		});
	}); 

    //js code for mobile menu 
    $('.header-bar').on('click', function(e) {
        $('.main-menu, .header-bar').toggleClass('active');
    });
    
    //js code for mobile menu
    //menu top fixed start
    var fixed_top = $(".header-section");
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 220) {
            fixed_top.addClass("menu-fixed animated fadeInDown");
            fixed_top.removeClass("slideInUp");
            $('body').addClass("body-padding");
        } else {
            fixed_top.removeClass("menu-fixed fadeInDown");
            fixed_top.addClass("slideInUp"); 
            $('body').removeClass("body-padding");
        }
    });
    // Click event to scroll bar start
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').on("click", function () {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
        return false;
    });
    //Click event to scroll to top end

    //Js code for search box start
    $(".search-icon").on("click", function () {
        $(".search-box").toggleClass("open-search");
    });
    //Js code for search box end
    
     //header search
	$('.search-box').on('click', function () {
		$('.menu-search-form').addClass('open');
	});
	$('.menu-search-close').on('click', function () {
		$('.menu-search-form').removeClass('open');
	});

//magnificpopup
    $(".simg").magnificPopup({
        type : 'image',
        gallery:{
            enabled: true
        }
    });

//magnificpopup
    $(".video").magnificPopup({
        type : 'iframe',
        iframe: {
        markup: '<div class="mfp-iframe-scaler">'+
                    '<div class="mfp-close"></div>'+
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '</div>', 

        patterns: {
            youtube: {
            index: 'youtube.com/', 

            id: 'v=', 

            src: '//www.youtube.com/embed/%id%?autoplay=1' 
            },
            vimeo: {
            index: 'vimeo.com/',
            id: '/',
            src: '//player.vimeo.com/video/%id%?autoplay=1'
            },
            gmaps: {
            index: '//maps.google.',
            src: '%id%&output=embed'
            }

        },

        srcAction: 'iframe_src', 
        }
    });
    
// Filtering Isotope
// init Isotope
var $grid = $('.trending-wrapper').isotope({
  // options
});
// filter items on button click
$('.heading-tap').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});    
    


})(jQuery);













const sliderContainer = document.querySelector(".slider-container");
const slidRight = document.querySelector(".right-slid");
const slidLeft = document.querySelector(".left-slid");
const upButton = document.getElementById("up-btn");
const downButton = document.getElementById("down-btn");
const sliderLength = slidRight.querySelectorAll("div").length;

let activeSlideIndex = 0;
slidLeft.style.top = `-${(sliderLength - 1) * 100}vh`;

downButton.addEventListener("click", () => nextSlide("up"));
upButton.addEventListener("click", () => nextSlide("down"));

function nextSlide(params) {
  const sliderHeight = sliderContainer.clientHeight;

  if (params === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > sliderLength - 1) {
      activeSlideIndex = 0;
    }
  }

  if (params === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = sliderLength - 1;
    }
  }

  slidRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slidLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}



















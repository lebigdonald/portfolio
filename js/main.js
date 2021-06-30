(function ($) {
	"use strict";
	var nav = $('nav');
  var navHeight = nav.outerHeight();
  
  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
			$('.navbar-brand img').prop('src', './img/LeBigDonald_Black.png');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
			$('.navbar-brand img').prop('src', './img/LeBigDonald_White.png');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		loop: true,
    nav: false,
    dots: true,
    center: true,
    margin: 15,
    slideSpeed: 1000,
    autoplayTimeout: 5000,
    stopOnHover: false,
    autoPlay: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    responsive : {
        0 : {
            items: 1
        },
        768 : {
            items: 2
        },
        960 : {
            items: 3
        },
        1200 : {
            items: 3
        },
        1920 : {
            items: 3
        }
    }
	});
})(jQuery);

var home = [
  "./img/headers/intro-bg1.jpg",
  "./img/headers/intro-bg2.jpg",
  "./img/headers/intro-bg3.jpg",
  "./img/headers/intro-bg4.jpg",
  "./img/headers/intro-bg5.jpg",
  "./img/headers/intro-bg6.jpg"
];

var section_counter = [
  "./img/headers/intro-bg6.jpg",
  "./img/headers/intro-bg5.jpg",
  "./img/headers/intro-bg4.jpg",
  "./img/headers/intro-bg3.jpg",
  "./img/headers/intro-bg2.jpg",
  "./img/headers/intro-bg1.jpg"
];

var testimonials_footer = [
  "./img/headers/intro-bg4.jpg",
  "./img/headers/intro-bg5.jpg",
  "./img/headers/intro-bg6.jpg",
  "./img/headers/intro-bg1.jpg",
  "./img/headers/intro-bg2.jpg",
  "./img/headers/intro-bg3.jpg"
];

setInterval(changeImage, 5000);

function changeImage() {
  var i = Math.ceil(Math.random() * 5);

  document.getElementById("home").style.backgroundImage = "url('" + home[i] + "')"; 
  document.getElementById("section-counter").style.backgroundImage = "url('" + section_counter[i] + "')"; 
  document.getElementById("testimonials").style.backgroundImage = "url('" + testimonials_footer[i] + "')"; 
  document.getElementById("footer").style.backgroundImage = "url('" + testimonials_footer[i] + "')"; 
}

$("#copyright_date").text(new Date().getFullYear());

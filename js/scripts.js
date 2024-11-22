// jQuery to handle header sticking on screen on scroll
jQuery(document).ready(function($){
	$(window).scroll(function(){
		if($(this).scrollTop() >= 100){
			$('header').addClass('fixed');
		}else{
			$('header').removeClass('fixed');
		}
	});


	var lightbox = $('.port-items a').simpleLightbox({ history: false });

	
	var createdate = new Date();
	var getyear = createdate.getFullYear();
	var getyeardiv = document.getElementById('year');
	getyeardiv.innerHTML = getyear;


	$('a.showmenu').click(function(){
		$('nav').fadeIn();
		$('body').addClass('disablescroll');
		$('a.hidemenu').show();
	});
	$('a.hidemenu').click(function(){
		$('nav').fadeOut();
		$('body').removeClass('disablescroll');
		$(this).hide();
	});

	var viewportWidth = $(window).width();
    if (viewportWidth < 1200) {
    	$("nav a").click(function() {
			$("nav").fadeOut();
			$(".hidemenu").hide();
			$(".showmenu").show();
			$('body').removeClass('disablescroll');
		});
    }

    
    $(function() {
		$('a.scroll').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({scrollTop: target.offset().top - 120}, 1200);
					return false;
				}
			}
		});
	});
});

// JavaScript to handle font color change on scroll
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    const menuLinks = document.querySelectorAll(".menu nav ul li a");
    
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
      menuLinks.forEach(link => link.style.color = "#000"); // Set menu links to black on scroll
    } else {
      header.classList.remove("scrolled");
      menuLinks.forEach(link => link.style.color = "#fff"); // Set menu links to white at the top
    }
});
(function($){"use strict";function preloader(){$('#preloader').delay(0).fadeOut()};$(window).on('load',function(){preloader();wowAnimation()});$('.navigation a[href*="#"]:not([href="#"])').on("click",function(){console.log("click");if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name=" + this.hash.slice(1) + "]');if(target.length){if($(window).width()<768){$("html, body").animate({scrollTop:target.offset().top-70},1000,"easeInOutExpo")}else{$("html, body").animate({scrollTop:target.offset().top-80},1000,"easeInOutExpo")}
return!1}}});if($('.menu-area li.menu-item-has-children ul').length){$('.menu-area .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>')}
if($('.mobile-menu').length){$('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click',function(){$(this).toggleClass('open');$(this).prev('ul').slideToggle(300)});$('.mobile-nav-toggler').on('click',function(){$('body').addClass('mobile-menu-visible')});$('.menu-backdrop, .mobile-menu .close-btn, .mobile-menu .navigation li a').on('click',function(){$('body').removeClass('mobile-menu-visible')})}
$("[data-background]").each(function(){$(this).css("background-image","url("+$(this).attr("data-background")+")")})
$("[data-bg-color]").each(function(){$(this).css("background-color",$(this).attr("data-bg-color"))});$('.banner-social-link').on('click',function(){$(this).parent().find('span').animate({width:'toggle'},0);$(this).parent().toggleClass('is-active')});$(window).on('scroll',function(){var scroll=$(window).scrollTop();if(scroll<520){$("#sticky-header").removeClass("sticky-menu");$("#header-fixed-height").removeClass("active-height")}else{$("#sticky-header").addClass("sticky-menu");$("#header-fixed-height").addClass("active-height")}});if($('.scroll-to-target,.banner-scroll a').length){$(".scroll-to-target,.banner-scroll a").on('click',function(){var target=$(this).attr('data-target');$('html, body').animate({scrollTop:$(target).offset().top},1000)})}
$('.home-01 a[href*="#"]:not(.section-link)').on('click',function(){$('html, body').animate({scrollTop:$('html').offset().top},1000)});$('[data-countdown]').each(function(){var $this=$(this),finalDate=$(this).data('countdown');$this.countdown(finalDate,function(event){$this.html(event.strftime('<div class="time-count day"><span>%D</span>Days</div><div class="time-count hour"><span>%H</span>hour</div><div class="time-count min"><span>%M</span>minute</div><div class="time-count sec"><span>%S</span>second</div>'))})});$('.blog-thumb-active').slick({dots:!1,infinite:!0,arrows:!0,speed:1500,slidesToShow:1,slidesToScroll:1,fade:!0,prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',});$('.bt-roadmap_x').mCustomScrollbar({axis:"x",scrollbarPosition:"outside",theme:"custom-bar3",scrollInertia:100,advanced:{autoExpandHorizontalScroll:2}});function wowAnimation(){var wow=new WOW({boxClass:'wow',animateClass:'animated',offset:0,mobile:!1,live:!0});wow.init()}})(jQuery)
;
(function ($) {
    
    "use strict";
    // Use strict
    $(window).on('load', function () {
        $('.owl-carousel').each(function () {
            var $carousel = $(this);
            $carousel.owlCarousel({
                dots: $carousel.data("dots"),
                items: $carousel.data("items"),
                slideBy: $carousel.data("slideby"),
                center: $carousel.data("center"),
                loop: $carousel.data("loop"),
                margin: $carousel.data("margin"),
                nav: $carousel.data("nav"),
                autoplay: true,
                autoplayTimeout: $carousel.data("autoplay-timeout"),
                navText: ['<span class="fa fa-chevron-left"><span>', '<span class="fa fa-chevron-right"></span>'],
                responsive: $carousel.data("responsive"),
                animateOut: $carousel.data("animateout"),
                animateIn: $carousel.data("animatein"),
            });
        });
    });

})(jQuery);
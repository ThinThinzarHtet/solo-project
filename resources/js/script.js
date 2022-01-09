// Preloader
$(window).on('load', function() {
    $('#status').fadeOut(1000);
    $('#preloader').delay(1100).fadeOut(1000);
});

// Carousel Plugin
$(document).ready(function() {
    $(".owl-carousel").owlCarousel(
        {
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                1000:{
                    items:2
                }
            }
        }
    );
})
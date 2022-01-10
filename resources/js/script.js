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

// Progress Bar
$(document).ready(function() {
    $('#progress-elements').waypoint(function() {
        $('.progress-bar').each(function() {
            $(this).animate({
                width:$(this).attr('aria-valuenow') + '%'
            }, 3000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    })
});

// Responsive Tab Services
$(document).ready(function() {
    $('#services-tab').responsiveTabs({
        animation: 'slide',
    });
})
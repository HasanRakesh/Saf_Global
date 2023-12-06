(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {


        $(".hero-slider-inn").slick({
            slidesToShow: 1,
            infinite: true,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 9000,
           
        });


    });

    $(".presslogos").ticker({
        item: 'div',
        pauseOnHover: false,
        speed: 80,
        delay: 400
    });





}(jQuery));

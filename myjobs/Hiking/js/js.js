$('#header__slider').owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        mouseDrag: true,
    });

    $('#testimonial-slider').owlCarousel({
 		loop: true,
 		items: 1,
 		nav: true,
 		navText: ["<img src='img/prev.png'>", "<img src='img/next.png'>"],
 		dots: true,
    pagination: true,
 		startPosition: 2,
 		responsive: {
           0: {
               items: 1,
               margin: 150,
               center: true,
               nav: false,
               navText: []
           },
           992: {
               items: 1
           }
       }
    });

$(document).ready(function(){
    // responsvie menu 
    jQuery('#mobilemenu').meanmenu({
        meanScreenWidth: "767",
        meanMenuContainer: '.mobilemenu'
    });

    // slider acitve 
    $('.slider-active').owlCarousel({
    loop:true,
    nav:true,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
    // project active
    $('.project-active').owlCarousel({
    loop:true,
    nav:false,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
    // magnific popup
    $('.video-popup').magnificPopup({
  type: 'iframe'
  // other options
});
    //blog active
    $('.blog-active').owlCarousel({
    loop:true,
    nav:true,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

    //brand active
    $('.brand-active').owlCarousel({
    loop:true,
    nav:false,
    margin:50,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        767:{
            items:3
        },
        992:{
            items:5
        },
        1200:{
            items:6
        }
    }
})
    //testimonial active
    $('.testimonial-active').owlCarousel({
    loop:true,
    nav:true,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

})
jQuery( document ).ready(function($) {
  $("#main-nav").slicknav({

    prependTo:'.mobile-menu-wrap',
  });
  $(".homepage-slides").owlCarousel({

  	items:1,
  	
  	loop:true,
  	nav:true,
  	autoplay:true,
    dots:true,
  
  	navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
  
  autoplay:false
}); 
  $(".team-list").owlCarousel({

    // items:3,
    margin:30,
  
    loop:true,
    nav:false,
    dots:true,
    autoplay:true,
  autoplay:false,
   responsive:{
        0:{
            items:1,
      
        },
        600:{
            items:2,
         
        },
        1000:{
            items:3
           
        }
    }
}); 
  $(".testimonial-list").owlCarousel({

    items:3,
    margin:30,
  
    loop:true,
    nav:false,
    dots:true,
    autoplay:true,
  autoplay:false,
  responsive:{
        0:{
            items:1,
      
        },
        600:{
            items:2,
         
        },
        1000:{
            items:3
           
        }
    }
}); 
  $(".logo-carousel").owlCarousel({

    items:5,
    margin:30,
  
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
  autoplay:false,
  responsive:{
        0:{
            items:2,
      
        },
        600:{
            items:3,
         
        },
        1000:{
            items:5
           
        }
    }
}); 
  $("#web-design-skillber").circleProgress({
 value: 0.9,
   size:270,
   thickness:2 ,
 fill:'#22babf',
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.skill-count-no').html(Math.round(90 * progress) + '<i>%</i>');
  });
  $("#Graphic-Design-skillber").circleProgress({
 value: 0.95,
   size:270,
   thickness:2 ,
 fill:'#22babf',
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.skill-count-no').html(Math.round(95 * progress) + '<i>%</i>');
  });
  $("#Digital-Marketing-skillber").circleProgress({
 value: 0.84,
   size:270,
   thickness:2 ,
 fill:'#22babf',
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.skill-count-no').html(Math.round(84 * progress) + '<i>%</i>');
  });

});
$(document).ready(function() {
  /*
  $('.carousel').slick({
    adaptiveHeight: true,
    arrows: true,
    infinite: false,
    fade: true,
    variableWidth: false,
    //swipeToSlide: true,
    slidesToShow: 1,
    speed: 600,
    prevArrow: '<button type="button" class="slick-prev"><</button>',
    nextArrow: '<button type="button" class="slick-next">></button>',
  });
  */

  $('.carousel-1').owlCarousel({
    autoHeight: true,
    navigation: true,
    navigationText: ['<span class="prev-arrow"><</span>', '<span class="next-arrow">></span>'],
    singleItem: true,
    transitionStyle: 'fadeUp',
  });

  $('.carousel-2').owlCarousel({
    autoHeight: true,
    navigation: true,
    navigationText: ['<span class="prev-arrow"><</span>', '<span class="next-arrow">></span>'],
    singleItem: true,
    transitionStyle: 'fade',
  });

  $('.carousel-3').owlCarousel({
    autoHeight: true,
    navigation: true,
    navigationText: ['<span class="prev-arrow"><</span>', '<span class="next-arrow">></span>'],
    singleItem: true,
  });
});

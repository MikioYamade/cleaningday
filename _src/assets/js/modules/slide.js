// import $ from 'jquery';
// import 'slick-carousel';
const $ = require('jquery');
require('slick-carousel');

function init() {
  // const $slide = $('.c-slideItem');
  // console.log($slide);
  // console.log('スライド');
  slide();
  pictureSlide();
}

// Top用スライド関数
function slide() {
  const $slideHero = $('#l-hero__slide');
  const $slide = $('.c-slideItem');

  if ($slide[0]) {
    $slide.each((i, elm) => {
      slideItem($(elm));
    });
  }

  if ($slideHero[0]) {
    slideItem($slideHero);
  }
}


function slideItem(elm) {
  const $slide = $(elm).find('.c-pictures');
  const $item = $(elm).find('.c-pictures__item');
  const arrow = $(elm).find('.c-slideItemArrow');
  const autoSpeed = 4000;
  const slideSpeed = 1500;

  if (arrow[0]) {
    $slide.slick({
      autoplay: true,
      infinite: true,
      autoplaySpeed: autoSpeed,
      speed: slideSpeed,
      //fade: true,
      dots: true,
      arrows: false,
      appendArrows: arrow,
      //nextArrow: '<span class="c-arrow c-arrowNext"></span>',
      //prevArrow: '<span class="c-arrow c-arrowPrev"></span>',
      swipe: false,
      touchMove: false,
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          swipe: true,
          touchMove: true,
        },
      }, ],
    });
  } else {
    $slide.on('init', () => {
      setTimeout(() => {
        $item.eq(0).addClass('is-current');
      }, 500);
    });

    $slide.slick({
      autoplay: true,
      infinite: true,
      autoplaySpeed: autoSpeed,
      speed: slideSpeed,
      arrows: false,
      dots: true,
      //fade: true,
      swipe: true,
      touchMove: true,
    });

    $slide.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
      $item.eq(nextSlide).addClass('is-current');
      setTimeout(() => {
        $item.eq(currentSlide).removeClass('is-current');
      }, 1800);
    });
  }
}

// About用スライド関数
function pictureSlide() {
  const $slide = $('.c-pictureSlide');

  if (!$slide[0]) {
    return;
  }

  $slide.slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    variableWidth: true,
    arrows: false,
    dots: false,
    speed: 2000,
  });
}

module.exports = {
  init,
};

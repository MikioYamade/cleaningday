const $ = require('jquery');
const inView = require('in-view');
//const TimelineMax = require('gsap/TimelineMax');
//const Power3 = require('gsap/Power3');
const { TimelineMax, Power3, } = require('gsap');
//import { TimelineMax, Power3, } from 'gsap';

function init() {
  inviewCards();
  inviewBody();
  inviewUp();
  inviewZoom();
  inviewFooter();
}

function inviewUp() {
  inView('.c-inview--up').on('enter', el => {
    $(el).removeClass('c-inview--up');
  });
}
function inviewZoom() {
    inView('.c-inview--zoom').on('enter', el => {
      $(el).removeClass('c-inview--zoom');
    });
  }
  
function inviewCards() {
  const $cards = $('.c-inview--cards');
  const tl = new TimelineMax();
  let cardClassName = '';

  if ($cards.find('.c-card')[0]) {
    cardClassName = '.c-card';
  } else if ($cards.find('.c-card2')[0]) {
    cardClassName = '.c-card2';
  } else if ($cards.find('.c-card3')[0]) {
    cardClassName = '.c-card3';
  }

  tl.set($cards.find(cardClassName), {
    alpha: 0,
    y: 20,
  });

  inView('.c-inview--cards').on('enter', el => {
    tl.staggerTo($(el).find(cardClassName), 1, {
      alpha: 1,
      y: 0,
      ease: Power3.easeOut,
    }, 0.2);
  });
}

function inviewBody() {
  const $elm = $('.c-inview--body');

  $elm.find('p img, .c-pictures').addClass('c-inview--up').addClass('c-inview');
}

function inviewFooter() {
  const $hero = $('.l-hero');

  if (!$hero[0]) {
    return;
  }

  inView('#l-footer').on('enter', () => {
    $hero.addClass('is-hidden');
  }).on('exit', () => {
    $hero.removeClass('is-hidden');
  });
}

module.exports = {
  init,
};

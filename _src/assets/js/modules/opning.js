const $ = require('jquery');
require('jquery.easing');
require('imagesloaded');
//import imagesLoaded from 'imagesloaded';

function init() {
  const $loader = $('#l-loader');
  const $anime1 = $('#l-top-anime-1');
  const $anime2 = $('#l-top-anime-2');
  const $logo =  $('#l-logoTop');
  const $illust =  $('#p-mainIll');
  const video = document.querySelector('#l-topHero__video');
  const $videoFrame =  $('#l-topHero__videoFrame');
  let onFade = false;

  $loader.find('span').fadeIn(() => {
    $loader.addClass('is-loading');
  });

  // videoの準備ができたら一旦止めて3秒後にフェードアウトし映像を再生
  if (video) {
    video.oncanplay = function() {
      if (!onFade) {
        video.pause(); //ビデオ一時停止
        $loader.removeClass('is-loading');
        $loader.addClass('is-loading-fin');//ローダー消す

        setTimeout(() => {
          $anime1.addClass('is-anime-start');
        }, 500);
        setTimeout(() => {
          $anime1.removeClass('is-anime-start');
          $anime1.addClass('is-anime-end');
          $anime2.addClass('is-anime-start');
        }, 2000);

        setTimeout(() => {
          $loader.addClass('is-fin');
        }, 4000);

        setTimeout(() => {
          onFade = true;
          $logo.removeClass('is-1st');
          $illust.removeClass('is-1st');
          $videoFrame.removeClass('is-1st');
          video.play(); //ビデオ再生
        }, 4200);
      }
    }
  } else {
  }
}

function animation() {
  
}

module.exports = {
  init,
};

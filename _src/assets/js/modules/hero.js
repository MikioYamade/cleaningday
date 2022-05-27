const $ = require('jquery');
const debounce  = require('throttle-debounce/debounce');

function init() {
  setVideo();
}

function setVideo() {
  const $elm = $('#l-topHero__videoFrame');
  const $video = $('#l-topHero__video');

  if (!$elm[0]) {
    return;
  }

  $(window).on('resize', debounce(100, setLayout));
  /*$(window).resize(function() {
    setLayout();
  });
  */
  setLayout();

  function setLayout() {
    //console.log(11111);
    //const w = $(window).width();
    //const h = $(window).height();
    const w = $elm.width();
    const h = $elm.height();
    const ratio = h / w;

    if (ratio > 9 / 16) {
      $video.css({
        width: `${h * 16 / 9}px`,
        height: `${h}px`,
      });
    } else {
      $video.css({
        width: `${w}px`,
        height: `${w * 9 / 16}px`,
      });
    }
  }
}


module.exports = {
  init,
};

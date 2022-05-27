//const Loader = require('./modules/opning');
const Slide = require('./modules/slide');
const SmoothScroll  = require('./modules/smoothscroll.js');
//const Motion = require('./modules/motion');
const Gnav = require('./modules/gnav');
const Inview  = require('./modules/inview.js');
const ImgSwith  = require('./modules/image_switch.js');
//const Gmap  = require('./modules/gmap.js');
//const Hero  = require('./modules/hero.js');
//const Accordion  = require('./modules/accordion.js');

function init() {
  //Hero.init();
  ImgSwith.init();
  //Loader.init();
  Slide.init();
  SmoothScroll.init();
  //Motion.init();
  Gnav.init();
  //Gmap.init();
  Inview.init();
  //Accordion.init();
  //console.log('init test');
}

module.exports = {
  init,
};

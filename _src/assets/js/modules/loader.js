const $ = require('jquery');
require('imagesloaded');
const Slide = require('./slide');
// import Carousel from './slide';

function init() {
  imageLoader();
}

function imageLoader() {
  $('.images-loaded').imagesLoaded( { background: true }, function() {
    //console.log('読み込み完了');
    //Loadingfade();
  });
  // 5秒経ったら、強制的にローディング非表示
  setTimeout(Loadingfade, 5000);
}
//ローディング非表示処理
function Loadingfade(){
  // 0.4秒かけてローディング部分を非表示にし、その後1秒かけて背景を非表示
  $('#c-loading-main').fadeOut(400, function(){
    $('#c-loading').fadeOut(1000, function() {

      
      // Topの場合、オープニングアニメーション開始
      if($('.slideContent').length){
        $(".p-topMainTitle").addClass("changed");
        $(".p-topBrownBg").addClass("changed");
        $(".p-topBrownBg--r").addClass("changed");
        $(".p-topNav").addClass("changed");
        $(".p-topSubNav").addClass("changed");
        $(".l-booking").addClass("changed");
        $(".menu-trigger--top").addClass("changed");
        // アニメーションが終わる頃スライドショー開始
        setTimeout( Slide.init, 200 );
        Slide.init();
      }
      // 2階層目以降のページでスライドがページ内にある場合
      if($('.c-slideItem').length){
        Slide.init();
      }
    });


    
  });
}

module.exports = {
  init,
};

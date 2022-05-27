// import $ from 'jquery';
// import 'slick-carousel';
const $ = require('jquery');
const slide = document.getElementById('slide_wrap');      //スライダー親
const slideItem = $('.slide_item');   //スライド要素
const totalNum = slideItem.length - 1;                     // スライドの枚数を取得
const FadeTime = 2000;                                     //フェードインの時間
const IntarvalTime = 5000;                                 //クロスフェードさせるまでの間隔
let actNum = 0;                                            //現在アクティブな番号
let nowSlide;                                              //現在表示中のスライド
let NextSlide;                                             //次に表示するスライド

function init() {
  topslide();
  console.log(slideItem);
}

function topslide() {

  // DOM読み込み時にスライドの1枚目をフェードイン
  slideItem[0].classList.add('show_', 'zoom_');

  // 処理を繰り返す
  setInterval(() => {
      //console.log('来てる？');
      if (actNum < totalNum) {
        
          nowSlide = slideItem[actNum];
          NextSlide = slideItem[++actNum];

          //.show_削除でフェードアウト
          nowSlide.classList.remove('show_');
          // と同時に、次のスライドがズームしながらフェードインする
          NextSlide.classList.add('show_', 'zoom_');
          //フェードアウト完了後、.zoom_削除
          setTimeout(() => {
              nowSlide.classList.remove('zoom_');
          }, FadeTime);


      } else {

          nowSlide = slideItem[actNum];
          NextSlide = slideItem[actNum = 0];

          //.show_削除でフェードアウト
          nowSlide.classList.remove('show_');
          // と同時に、次のスライドがズームしながらフェードインする
          NextSlide.classList.add('show_', 'zoom_');
          //フェードアウト完了後、.zoom_削除
          setTimeout(() => {
              nowSlide.classList.remove('zoom_');
          }, FadeTime);

      };
  }, IntarvalTime);
}

module.exports = {
  init,
};

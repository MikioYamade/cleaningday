const $ = require('jquery');
const Utility = require('./utility.js');
// 置換の対象とするclass属性。
const $elem = $('.js-image-switch');
// 置換の対象とするsrc属性の末尾の文字列。
const strSp = '_sp.';
const strPc = '_pc.';
// 画像を切り替えるウィンドウサイズ。
var isSmart = Utility.isSmart();

function init() {
  imageSwitch();
  //console.log(isSmart);

  // 動的なリサイズは操作後0.2秒経ってから処理を実行する。
  var resizeTimer;
  $(window).on('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      imageSwitch();
    }, 200);
  });
}

function imageSwitch() {
    // ページ内にあるすべての`.js-image-switch`に適応される。
    $elem.each(function() {
      var $this = $(this);
      // ウィンドウサイズがタブレットサイズ以上であれば_spを_pcに置換する。
      if(!isSmart) {
        if($this.attr('src') != undefined) {
            $this.attr('src', $this.attr('src').replace(strSp, strPc));
        }
        if($this.attr('style') != undefined) {
            $this.attr('style', $this.attr('style').replace(strSp, strPc));
        }

      // ウィンドウサイズがタブレットサイズ未満であれば_pcを_spに置換する。
      } else {
        if($this.attr('src') != undefined) {
            $this.attr('src', $this.attr('src').replace(strPc, strSp));
        }
        if($this.attr('style') != undefined) {
            $this.attr('style', $this.attr('style').replace(strPc, strSp));
        }
      }
    });
  }

module.exports = {
    init,
};  
//const $ = require('jquery');

const $gheader = $('#l-header');
const $gnav = $('#l-header__gnav');
const $gnavBlock = $('#l-header__gnav ul');
const $menu = $('.menu');
const $menuLine = $('.menu__line');
const $gnav_link = $('.l-header__gnav a');
let navFlg = false;

function init() {
	gnavFunc();
	gnavResizeFunc();
	linkClickFunc();
	compactHeader();
}
  
// ======================
//   Icon Menu
// ======================
function gnavFunc() {
	$menu.on('click', () => {
		$menuLine.toggleClass('active');
		$gnav.fadeToggle();
		if (!navFlg) {
			$gnavBlock.delay(300).stop().animate({
				opacity: 1,
			}, 800);
			navFlg = true;
		} else {
			$gnavBlock.stop().animate({
			opacity: 0,
		}, 200);
		navFlg = false;
	}
});
// Stage Resize Function
$(window).resize(() => {
	gnavResizeFunc();
	});
}
  
function gnavResizeFunc() {
	// PCサイズ以下の場合
	if (window.innerWidth <= 960) {
	  if (!navFlg) {
			$gnav.css({ display: 'none', });
			$menuLine.removeClass('active');
	  }
  
	  // navFlg = false;
	// PCサイズ以上の場合
	} else {
	  $gnav.css({ display: 'block', });
	  $gnavBlock.css({ opacity: '1', });
	  $menuLine.removeClass('active');
	  navFlg = false;
	  // console.log(22222);
	}
}

// ======================
//   リンククリック関数（メニューを閉じる）
// ======================
function linkClickFunc() {
  $gnav_link.click(function () {
    // PCサイズ以下の場合
    if (window.innerWidth <= 960) {
			$menuLine.toggleClass('active');
			$gnav.fadeToggle();
			$gnavBlock.stop().animate({
				opacity: 0,
			}, 200);
			navFlg = false;
    }
  });
}

// ======================
//   Compact Header
// ======================
function compactHeader() {
  $(window).on('load scroll', function () {
    // 200以上スクロールしたら処理
    if ($(window).scrollTop() > 30) {
      $gheader.addClass('is-fixed');
    } else {
      $gheader.removeClass('is-fixed');
    }
  });
}

  
module.exports = {
	init,
};
  
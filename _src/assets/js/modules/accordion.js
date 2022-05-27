const $ = require('jquery');
const $target = $('.p-qaBox');
const $closeBtn = $('.p-qaBox__close');
const strOpened = 'is-opened';

function init() {
  accordion();
}

function accordion() {
  $closeBtn.click(function () {
    // ボタンから見た親要素にクラスがあるか確認
    var selected = $(this).parent().hasClass(strOpened);
    if (selected) { // 要素があれば
      $(this).parent().removeClass(strOpened); // 削除
    } else { // 要素が無ければ
      $(this).parent().addClass(strOpened); // 付与
    }
  });
}

module.exports = {
  init,
};

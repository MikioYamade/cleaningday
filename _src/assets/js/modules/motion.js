const $ = require('jquery');


function init() {
  let s;
  const spanizeLetters = {
    settings: {
      letters: $('.js-spanize'),
    },
    init() {
      s = this.settings;
      this.bindEvents();
    },
    bindEvents() {
      s.letters.html(function (i, el) {
        // spanizeLetters.joinChars();
        const spanizer = $.trim(el).split('');
        return '<span>' + spanizer.join('</span><span>') + '</span>';
      });
    },
  };
  spanizeLetters.init();
}

module.exports = {
  init,
};

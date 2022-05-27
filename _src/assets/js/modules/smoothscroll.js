//const $ = require('jquery');

function init() {
    $('a[href^="#"]').click(function(){
        //スクロールのスピード
        var speed = 500;
        //リンク元を取得
        var href= $(this).attr("href");
        //リンク先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        //リンク先までの距離を取得
        var position = target.offset().top - 100;
        //スムーススクロール
        $("html, body").stop().animate({scrollTop:position}, speed, 'easeOutQuad');
        //$('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
}


module.exports = {
    init,
};  
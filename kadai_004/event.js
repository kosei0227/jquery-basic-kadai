$(window).on('load', function () {
    console.log('読み込まれました');
});

$(function() {
    $(window).on('scroll',()=> {
        console.log('スクロールされました');
    });
});

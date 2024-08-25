$(function () {
    $('.btn').on('click', () => {
        $('.text-box').val("クリックしました");
        console.log($('.text-box').val());
    });
});
$(document).ready(function () {
    $(".teste").mouseenter(function () {
        $(this).css('box-shadow', '0 0 2px #888');
    });
    $(".teste").mouseleave(function () {
        $(this).css('box-shadow', 'none');
    });
})
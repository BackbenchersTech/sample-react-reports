$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".dailyfeedList1").offset().top},
        'slow');
});
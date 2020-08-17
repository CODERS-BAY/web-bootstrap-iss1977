$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 50 ) {
            $('.navbar').addClass('active');
            console.log("Add active");
        } else {
            $('.navbar').removeClass('active');
            console.log("remove active");
        }
    });
});
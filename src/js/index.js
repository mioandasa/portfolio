$(function() {
  // include parts
  $("#header").load("/parts/header.html");
  $("#contactArea").load("/parts/contact.html");
  $("#footer").load("/parts/footer.html");
});

window.onload = function () {
    //fadein
    $(window).scroll(function () {
        const windowHeight = $(window).height();
        const scroll = $(window).scrollTop();

        $('.js-scroll_fadein').each(function () {
            const targetPosition = $(this).offset().top;
            if (scroll > targetPosition - windowHeight + 100) {
                $(this).addClass("active");
            }
        });
    });

    // smooth scroll
  $('a[href^="#"]').click(function () {
    var adjust = 50;
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
}

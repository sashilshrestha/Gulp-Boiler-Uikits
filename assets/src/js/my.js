// $(window).scroll(function() {
//     var scroll = $(window).scrollTop();
//     if (scroll <= 500) {
//         $("#header").addClass("header-sticky");

//     }
//     else {
//         $("#header").removeClass("clearHeader");
//     }
// }

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('#header').addClass('header-sticky');
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $('#header').removeClass('header-sticky');
    }
});

// Hamburger Togggler
$(document).ready(function () {
    $('.fr-burger').click(function () {
        $('body').toggleClass('menu_shown');
    });
});

$(document).ready(function () {
    $('#downClick').click(function () {
        $('html,body').animate(
            {
                scrollTop: $('.ss-mission-section-first').offset().top,
            },
            'slow'
        );
    });
});

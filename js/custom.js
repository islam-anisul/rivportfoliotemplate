//smooth scroll
$(document).on('click', 'a[href^="#"]', function (event) {
    "use strict";

    event.preventDefault();
    $('html,body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});
//sticky navbar
$(function () {
    'use strict';
    $(window).on('scroll', function () {
        var sticky = $(this).scrollTop();

        if (sticky >= 400) {
            $('#topbar').addClass("sticky");
        } else {
            $("#topbar").removeClass("sticky");
        }

    });
});

// navbar trigger
$(function () {
    "use strict";

    $(".trigger").on('click', function () {
        $(this).toggleClass("mobileMenuOpen");
        $(".menuList").toggle('slow');
    });

    $(".listItem a").on('click',function(){
        $(".menuList").hide('slow');
        $(".trigger").removeClass('mobileMenuOpen');
    });
});

//portfolio
$(function () {
    "use strict";
    var mixer = mixitup('.portfolioContent');
});

$(function () {
    "use strict";
    $(".portbtn").on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});


//hire me
$(function () {
    "use strict";

    particlesJS("hireMe", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ff1818"
            },
            "shape": {
                "type": "triangle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },

            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "section",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": false
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

});

// back to top
$(function () {
    "use strict"

    $("#backToTop").hide();
    $(window).on('scroll', function () {
        var backTop = $(this).scrollTop();
        if (backTop >= 400) {
            $("#backToTop").show('slow');
        } else {
            $("#backToTop").hide('slow');
        }
    });
    $("#backToTop").on('click', function () {
        $('html,body').animate({
            scrollTop: 0,
        }, 1500);
    });
});
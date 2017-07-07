/// <reference path="../node_modules/@types/jquery/index.d.ts" />>
var $;
$(document).ready(function () {
    "use strict";
    $(".preloader-overlay .center").fadeOut(3000, function () {
        $(".preloader-overlay").fadeOut(2000);
    });

    /* INAIL NAVBAR HEIGHT */
    var navHeight = $(".main-nav").height(),
        navPhoneHeight = $(".nav-phone").height();

    /* TO CHANGE NAVBAR COLOR ON SCROLL */
    $(document).on("scroll", function () {
        if ($(this).scrollTop() > 1) {
            $(".main-nav").addClass("sticky");
        } else {
            $(".main-nav").removeClass("sticky");
        }

        $(".main-nav ul").removeClass("toggle", 1000);

        /* CHECK IF WINDOW SCROLL MORE THAN 100PX */
        if ($(this).scrollTop() > 100) {
            $(".back-btn").fadeIn(100);
        } else {
            $(".back-btn").fadeOut(100);
        }

    });



    /* NAVBAR BURGER CLICK */
    $(".nav-bar-burger").on("click", function () {
        $(".nav-bar-burger, .main-nav, ul").toggleClass("toggle");
    });

    /* CLOSE NAVBAR ON RESIZE WINDOW */
    $(window).resize(function () {
        $(".main-nav, .main-nav ul").removeClass("toggle");
    });

    /* SMOOTHSCROLL TOP SECTION */
    $(".slide-section").on("click", function (e) {
        var slideHref = $(this).attr("href");
        e.preventDefault();
        if (slideHref === ("#about-us") && $(window).scrollTop() === 0) {
            $("html, body").animate({
                scrollTop: $(slideHref).offset().top - navHeight - navPhoneHeight
            }, 1000);

        } else {
            $("html, body").animate({
                scrollTop: $(slideHref).offset().top - navHeight
            }, 1000);
        } ;
    });

    $(".main-nav ul li").click(function () {
        $(".main-nav ul").removeClass("toggle");
        $(this).addClass("active").siblings().removeClass("active");
    });
    $(".bxslider").bxSlider();

    /* SCROLL TO TOP */
    $(".back-btn, .main-nav ul li:first-of-type").on("click", function () {
        $("body, html").animate({
            scrollTop: 0,
        }, 1000);
    });
});
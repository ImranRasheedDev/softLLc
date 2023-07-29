// slick sliders start

$(document).ready(function () {
  $(".slider-one").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    fade: true,
    cssEase: "linear",
    arrows: false,
  });

  $("#prev-industry").click(function () {
    $(".slider-one").slick("slickPrev");
  });

  $("#next-industry").click(function () {
    $(".slider-one").slick("slickNext");
  });

  $(".technologies-slider").slick({
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $(".logos-slider").slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".guides-cards-slider").slick({
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

// slick sliders end

// start header scroll add and remove class

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 500) {
    $(".navbar.position-absolute").addClass("navbar-stuck");
  } else {
    $(".navbar.position-absolute").removeClass("navbar-stuck");
  }
});

// end header scroll add and remove class

// start mobile menu open and close

$("#mobile_menu_button").click(function () {
  $(".main_navigation").addClass("open");
  $("body").addClass("overflow-hidden");
  $("html").addClass("overflow-hidden");
  $("header").addClass("overflow-revert");
});
$("#cross_header_menu").click(function () {
  $(".main_navigation").removeClass("open");
  $("body").removeClass("overflow-hidden");
  $("html").removeClass("overflow-hidden");
  $("header").removeClass("overflow-revert");
});

// end mobile menu open and close

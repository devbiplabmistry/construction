$(function () {
  $('.service-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    centerMode: true,
    centerPadding: '0px',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
    }, 
  ],
  responsive: [{
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 3,
      infinite: true,
      dots: false,
    }
  }, 
],
  });


  $('.comment-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
    },
   ],
   responsive: [{
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 3,
      infinite: true,
      dots: false,
    }
  }, ],

  });

  $('.b-wrapper').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    centerMode: true,
    centerPadding: "0px",
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
    }, 
  ],
  responsive: [{
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 3,
      infinite: true,
      dots: false,
    }
  }, 
],

  });

  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });
  // sticky-navbar part start 
  $(window).scroll(function () {
    var sticky = $(this).scrollTop()
    if (sticky > 100) {
      $(".navbar").addClass("sticky-navbar")
    } else {
      $(".navbar").removeClass("sticky-navbar")
    }
    // sticky-navbar part End

    // Back-to-top navbar part Start

    if (sticky > 100) {
      $(".back-to-top").fadeIn(300)
    } else {
      $(".back-to-top").fadeOut(300)
    }
  })

  $('.back-to-top').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 1000)

  })
  // Back-to-top navbar part End
  // scroll-spy navbar part start
  var html_body = $('html,body');
  $('.navbar-nav').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        html_body.animate({
          scrollTop: target.offset().top - 17
        }, 1500);
        return false;
      }

    }
  });

  // scroll-spy navbar part End

  $(window).load(function () {
    $("#preloader").delay(500).fadeOut(300)
  })


})

let bars=document.getElementById("bars")
let mobile_menu=document.getElementById("mobile_menu")
let line1=document.querySelector(".line1")
let line2=document.querySelector(".line2")
let line3=document.querySelector(".line3")

bars.addEventListener("click",function(){
  mobile_menu.classList.toggle("slide_menu")
  line1.classList.toggle("baka1")
  line3.classList.toggle("baka2")
  line2.classList.toggle("bakanai")


})

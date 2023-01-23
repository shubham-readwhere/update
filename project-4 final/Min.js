$(document).ready(function () {
    $(".customer-logos").slick({
      slidesToShow: 4,
      slidesToScroll: 3,
      autoplay:false,
      autoplaySpeed: 1700,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            dots: false,
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 2,
            autoplay: true,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow:2,
            slidesToScroll: 1,
          }
        }
      ]
    });
  });
  


      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      
      768: {
        slidesPerView: 2,  //브라우저가 768보다 클 때
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,  //브라우저가 1024보다 클 때
        spaceBetween: 10,
      },
    }
      });

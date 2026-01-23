const swiper = new Swiper('.swiper', {
  // core settings
  loop: true,                // <-- infinite loop
  speed: 700,                // transition speed in ms
  slidesPerView: 1,          // how many slides visible
  spaceBetween: 2,
  centeredSlides: false,

  // pagination
  //  pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },

  // navigation arrows
  // navigation: {
  // nextEl: '.swiper-button-next',
  // prevEl: '.swiper-button-prev',
  //  }

  // optional: autoplay (auto sliding). Remove if you don't want auto-play.
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  // responsive breakpoints (optional)
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 4
    }
  }
});



// const swiper2 = new Swiper('.swiper-review', {
//   loop: true,                 // enables infinite loop
//   speed: 700,                 // transition speed in ms
//   slidesPerView: 1,           // show one testimonial at a time
//   spaceBetween: 20,           // gap between slides
//   autoplay: {
//     delay: 400,              // auto-change every 4s
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: '.swiper-pagination', // dots
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next', // right arrow
//     prevEl: '.swiper-button-prev', // left arrow
//   },
// });



  const testimonialSwiper = new Swiper('.swiper-testimonial', {
   // core settings
  loop: true,                // <-- infinite loop
  speed: 700,                // transition speed in ms
  slidesPerView: 1,          // how many slides visible
  spaceBetween: 2,
  centeredSlides: true,

  // pagination
  //  pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },

  // navigation arrows
  // navigation: {
  // nextEl: '.swiper-button-next',
  // prevEl: '.swiper-button-prev',
  //  }

  // optional: autoplay (auto sliding). Remove if you don't want auto-play.
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  // responsive breakpoints (optional)
  breakpoints: {
    768: {
      slidesPerView: 1
    },
    992: {
      slidesPerView: 1
    }
  }
});
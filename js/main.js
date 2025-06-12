const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    },

 navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
  });
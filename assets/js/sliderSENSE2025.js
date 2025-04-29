// Swiper para los cursos
new Swiper('.card-wrapper-courses', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 10,
    autoplay: true,
    speed: 500,
    
  
    // Pagination Bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
      slidePerView: 1,
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    },
  
    
  });

// Swiper para los patrocinadores (sin flechas de navegación)
new Swiper('.card-wrapper-sponsors', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,
  autoplay: true,
  speed: 500,

  // Pagination Bullets (optional, if you want pagination for sponsors)
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Eliminar flechas de navegación
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // Responsive breakpoints for the sponsors swiper
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});
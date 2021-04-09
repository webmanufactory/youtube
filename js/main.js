const swiperChannel = new Swiper('.channel-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },
  breakpoints: {
   1900: {
    slidesPerView: 6
   },
   1600: {
    slidesPerView: 5
   },
   1300: {
    slidesPerView: 4
   },
   1100: {
    slidesPerView: 3
   },
   800: {
    slidesPerView: 2
   }
  }
});

const swiperRecommended = new Swiper('.recommended-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.recommended-button-next',
    prevEl: '.recommended-button-prev',
  },
  breakpoints: {
   1600: {
    slidesPerView: 3
   },
   1100: {
    slidesPerView: 2
   }
  }
});
const swiperRecommendedChannel = new Swiper('.recommended-channel-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.recommended-channel-button-next',
    prevEl: '.recommended-channel-button-prev',
  },
  breakpoints: {
   1900: {
    slidesPerView: 6
   },
   1600: {
    slidesPerView: 5
   },
   1300: {
    slidesPerView: 4
   },
   1100: {
    slidesPerView: 3
   },
   800: {
    slidesPerView: 2
   }
  }
});
let searchBtn = document.querySelector('.mobile-search');
let mobileSearch = document.querySelector('.input-group');
searchBtn.addEventListener('click', ()=> {
  mobileSearch.classList.toggle('is-open');
})

if (document.documentElement.scrollWidth <= 768 ) {
  swiperChannel.destroy();
  swiperRecommended.destroy();
  swiperRecommendedChannel.destroy();
}
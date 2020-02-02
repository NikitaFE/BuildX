$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    breakpoints: {
      1170: {
        slidesPerView: 2,
        spaceBetween: 30,
      }
    }
  })
});

$('.header__button').click(function() {
  $('.header__burger').toggleClass('header__burger--active');
  $('.nav').toggleClass('nav--hidden');
  $('.header__contacts').toggleClass('header__contacts--hidden');
});

$('.nav__button').click(function() {
  $('.nav__search').toggleClass('nav__search--hidden');
});

$(function () {
  // Mobile navigation.
  $('.js-menu-trigger').click(function (event) {
    event.preventDefault();
    $('.b-main-menu').toggleClass('m-active');
  });

  // News clips.
  $('.js-news-wrapper > h5:gt(0)').hide();
  setInterval(function () {
    $('.js-news-wrapper > h5:first').fadeOut(1000, function() {
      $(this).next().fadeIn(1000);
      $(this).appendTo('.js-news-wrapper');
    });
  }, 6000);

  // Background images.
  /*
  setInterval(function () {
    var current = $('.e-bg.m-visible')
      , next = current.is(':last-child') ? $('.e-bg:first-child') : current.next();
    next.addClass('m-visible');
    current.removeClass('m-visible');
  }, 6500);
  */

  // Products slider.
  // @see http://unslider.com/
  var slider = $('.b-slider').unslider({
    dots: true,
    keys: false,
    fluid: true
  });

  // Smooth scrolling.
  $('nav').localScroll({hash: true});
});

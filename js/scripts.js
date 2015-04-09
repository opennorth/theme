$(function () {
  // Mobile navigation.
  $('.js-menu-trigger').click(function () {
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
  // setInterval(function () {
  //   var current = $('.e-bg.m-visible')
  //     , next = current.is(':last-child') ? $('.e-bg:first-child') : current.next();
  //   next.addClass('m-visible');
  //   current.removeClass('m-visible');
  // }, 6500);

  // Products slider.
  var slider = $('.b-slider').unslider({
    dots: true,
    keys: false,
    fluid: true
  });

  // Smooth scrolling.
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

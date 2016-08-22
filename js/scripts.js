$(function () {
  // Mobile navigation.
  $('.js-menu-trigger').click(function (event) {
    event.preventDefault();
    $('.b-main-menu').toggleClass('m-active');
  });

  // News clips.
  if ($('.js-news-wrapper a').length > 1) {
    $('.js-news-wrapper a:gt(0)').hide();
    setInterval(function () {
      $('.js-news-wrapper a:first').fadeOut(1000, function () {
        $(this).next().fadeIn(1000).end().appendTo('.js-news-wrapper');
      });
    }, 6000);
  }

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
  var slider = $('.b-slider');

  if (slider.unslider) {
    var sliderData = slider.data('unslider');

    slider.unslider({
      animateHeight:true,
      arrows: false,
      autoplay: true,
      delay: 6000,
      dots: true,
      fluid:true,
      keys: false,
      activeClass: 'active'
    });

    // Resize slider on window resize
    $( window ).resize(function() {
        var active_slide_height = slider.find('li.active').outerHeight();
        slider.height(active_slide_height);
    });
  }


  // Smooth scrolling.
  var nav = $('nav');
  if (nav.localScroll) {
    nav.localScroll({
      hash: true
    });
  }

  // equalize elements
  function equalize(){
    if (document.body.clientWidth >= 641) {
      var maxHeight = 0;
      $("#products-columns .col-header").each(function(){
        $(this).removeAttr("style");
      });
      $("#products-columns .col-header").each(function(){
         if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
      });
      $("#products-columns .col-header").each(function(){
        $(this).height(maxHeight);
      });
      var maxHeight2 = 0;
      $("#products-columns .col-content").each(function(){
        $(this).removeAttr("style");
      });
      $("#products-columns .col-content").each(function(){
         if ($(this).height() > maxHeight2) { maxHeight2 = $(this).height(); }
      });
      $("#products-columns .col-content").each(function(){
        $(this).height(maxHeight2);
      });
    }
    else{
      $("#products-columns .col-header").each(function(){
        $(this).removeAttr("style");
      });
      $("#products-columns .col-content").each(function(){
        $(this).removeAttr("style");
      });
    }
    if (document.body.clientWidth > 1025) {
      var maxHeight = 0;
      $("#services-columns .col-header").each(function(){
        $(this).removeAttr("style");
      });
      $("#services-columns .col-header").each(function(){
         if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
      });
      $("#services-columns .col-header").each(function(){
        $(this).height(maxHeight);
      });
      var maxHeight2 = 0;
      $("#services-columns .col-content").each(function(){
        $(this).removeAttr("style");
      });
      $("#services-columns .col-content").each(function(){
         if ($(this).height() > maxHeight2) { maxHeight2 = $(this).height(); }
      });
      $("#services-columns .col-content").each(function(){
        $(this).height(maxHeight2);
      });
    }
    else{
      $("#services-columns .col-header").each(function(){
        $(this).removeAttr("style");
      });
      $("#services-columns .col-content").each(function(){
        $(this).removeAttr("style");
      });
    }
  }
  $(document).ready(function(){
    window.setTimeout(equalize, 100);
  });
  window.addEventListener("resize", equalize);
});

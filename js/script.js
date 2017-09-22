$(function() {
  // Smooth Scrolling
  !function ($) {
      $(function(){
          $('#running-box, #bg-car').carousel({});
          var $root = $('html, body');
          $('a').click(function() {
              var href = $.attr(this, 'href');
              $root.animate({
                  scrollTop: $(href).offset().top - 120
              }, 500, function () {
                  window.location.hash = href;
              });
              return false;
          });
      })
  }(window.jQuery)

  // Collapse nav on mobile after clicking on a link
  $('.navbar-collapse a').click(function (e) {
        $('.navbar-collapse').collapse('toggle');
      });


})

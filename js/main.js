$(document).ready(function() {
  $('.portfolio').click(function(event) {
    event.preventDefault();
    $.smoothScroll({
      scrollTarget: '#portfolio',
      speed: 1800,
    });
  });
  $('.values').click(function(event) {
    event.preventDefault();
    $.smoothScroll({
      scrollTarget: '#values',
      speed: 1800,
    });
  });
  $('.team').click(function(event) {
    event.preventDefault();
    $.smoothScroll({
      scrollTarget: '#team',
      speed: 1800,
    });
  });
  $("#typing").typed({
      strings: ["architect,^350 code,^350 deploy", ],
      typeSpeed: 60,
  });
});
$(document).ready(function() {
  $('.portfolio').click(function(event) {
    event.preventDefault();
    $.smoothScroll({
      scrollTarget: '#portfolio',
      speed: 1800,
    });
  });
  $('.services').click(function(event) {
    event.preventDefault();
    $.smoothScroll({
      scrollTarget: '#services',
      speed: 1800,
    });
  });
});
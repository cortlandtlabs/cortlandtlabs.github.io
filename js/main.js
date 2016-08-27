$(document).ready(function() {
  $('.portfolio').click(function(event) {
    event.preventDefault();
    $.smoothScroll({
      scrollTarget: '#portfolio',
      speed: 1800,
    });
  });
});
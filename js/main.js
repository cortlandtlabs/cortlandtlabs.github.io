$(document).ready(function() {
  $('.portfolio').click(function(event) {
    event.preventDefault();
    $.smoothScroll({
      scrollTarget: '#portfolio',
      speed: 2000,
      offset: 5
    });
  });
});
$(document).ready(function() {
  if($(window).width() > 650) {
    $('#view-2').slick({
      dots: true,
      arrows: false,
      speed: 500,
      vertical: true,
      verticalSwiping: true,
    })
  }
})

$(document).ready(function() {
  window.sr = ScrollReveal({ reset: true });
  sr.reveal('.card', { duration: 1800 });
});
$(window).on('load', function() {
   $("#cover").hide();
});
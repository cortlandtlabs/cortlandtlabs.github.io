window.onload = function() {
  var myScroll;
  function loaded() {
      myScroll = new IScroll('#view-2', {
        listenX: true,
        listenY: true
      });
      myScroll.scrollTo(0, -100)
  }
}
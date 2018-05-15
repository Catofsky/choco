(function() {
  var keys = [32, 33, 34, 35, 36, 37, 38, 39, 40];

  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
  }

  function keydown(e) {
    for (var i = keys.length; i--; ) {
      if (e.keyCode === keys[i]) {
        preventDefault(e);
        return;
      }
    }
  }

  function wheel(e) {
    preventDefault(e);
  }

  window.disable_scroll = function() {
    if (window.addEventListener) {
      window.addEventListener("DOMMouseScroll", wheel, false);
    }
    window.onmousewheel = document.onmousewheel = wheel;
    document.onkeydown = keydown;
    disable_scroll_mobile();
  };

  window.enable_scroll = function() {
    if (window.removeEventListener) {
      window.removeEventListener("DOMMouseScroll", wheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;
    enable_scroll_mobile();
  };

  function disable_scroll_mobile() {
    document.addEventListener("touchmove", preventDefault, false);
  }
  function enable_scroll_mobile() {
    document.removeEventListener("touchmove", preventDefault, false);
  }
})();

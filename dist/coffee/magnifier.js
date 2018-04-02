(function() {
  var cfg, leave, move, on_move, pic_pos, zoom;

  cfg = {};

  window.uMagnifier = function(config) {
    cfg = config;
    cfg.zoom = false;
    cfg.pic = cfg.magnifier.children('img');
    cfg.magnifier.on('click', zoom);
    return cfg.magnifier.on('mousemove', on_move);
  };

  // cfg.magnifier.on 'mouseleave', leave
  zoom = function(e) {
    cfg.magnifier.children().toggleClass('active', !cfg.zoom);
    cfg.zoom = !cfg.zoom;
    return move(e.layerX, e.layerY);
  };

  on_move = function(e) {
    return move(e.layerX, e.layerY);
  };

  move = function(lx, ly) {
    var msizeX, msizeY, sizeX, sizeY, x, y;
    sizeX = cfg.magnifier.first().clientWidth;
    sizeY = cfg.magnifier.first().clientHeight;
    x = lx / sizeX;
    y = ly / sizeY;
    msizeX = cfg.pic.first().clientWidth;
    msizeY = cfg.pic.first().clientHeight;
    if (cfg.zoom) {
      return pic_pos((sizeX - msizeX) * x, (sizeY - msizeY) * y);
    }
  };

  pic_pos = function(x, y) {
    var st;
    st = cfg.pic.first().style;
    st.left = x + 'px';
    return st.top = y + 'px';
  };

  leave = function() {
    cfg.zoom = false;
    return cfg.magnifier.children().removeClass('active');
  };

}).call(this);

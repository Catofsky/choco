(function() {
  var cfg, on_click;

  cfg = {};

  window.parts.btn = function(config) {
    cfg = config;
    return u('.part_btn').each(function(e) {
      return e.active = false;
    }).on('click', on_click);
  };

  on_click = function() {
    return this.toggleClass('active', this.active);
  };

}).call(this);

(function() {
  var cfg, on_click;

  cfg = {};

  window.parts.checkbox = function(config) {
    cfg = config;
    return cfg.checkbox.each(function(e) {
      return on_click.call(e);
    }).on('click', on_click);
  };

  on_click = function() {
    var cb, self;
    self = u(this);
    cb = self.find('input');
    return self.find('i').html(cb.first().checked ? 'check_box' : 'check_box_outline_blank');
  };

}).call(this);

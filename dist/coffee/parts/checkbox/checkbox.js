(function() {
  var cfg, onClick;

  cfg = {};

  window.parts.checkbox = function(config) {
    cfg = config;
    return cfg.checkbox.each(function(e) {
      return onClick.call(e);
    }).on('click', onClick);
  };

  onClick = function() {
    var cb, self;
    self = u(this);
    cb = self.find('input');
    return self.find('i').html(cb.first().checked ? 'check_box' : 'check_box_outline_blank');
  };

}).call(this);

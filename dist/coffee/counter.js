(function() {
  var add, cfg, sub;

  cfg = {};

  window.uCounter = function(config) {
    cfg = config;
    cfg.max = parseInt(cfg.count.data('max'));
    cfg.min = parseInt(cfg.count.data('min'));
    cfg.add.on('click', add);
    return cfg.sub.on('click', sub);
  };

  add = function() {
    var num;
    num = parseInt(cfg.num.html());
    if (num !== cfg.max) {
      return cfg.num.html(num + 1);
    }
  };

  sub = function() {
    var num;
    num = parseInt(cfg.num.html());
    if (num !== cfg.min) {
      return cfg.num.html(num - 1);
    }
  };

}).call(this);

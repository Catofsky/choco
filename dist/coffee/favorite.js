(function() {
  var cfg, click;

  cfg = {};

  window.uFavorite = function(config) {
    cfg = config;
    return cfg.favorite.each(function(e) {
      return e.selected = false;
    }).on('click', click);
  };

  click = function() {
    var btn;
    btn = u(this);
    this.selected = !this.selected;
    btn.toggleClass('active', this.selected);
    btn.find('span').html(this.selected ? 'В избранном' : 'В избранное');
    return btn.find('i').html(this.selected ? 'favorite' : 'favorite_outline');
  };

}).call(this);

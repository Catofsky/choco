(function() {
  var cfg;

  cfg = {};

  window.parts.product_card = function(config) {
    cfg = config;
    cfg.items.on('mouseover', function() {
      cfg.items.removeClass('open');
      return u(this).addClass('open');
    }).on('mouseleave', function() {
      return cfg.items.removeClass('open');
    });
    return cfg.hearts.each(function(e) {
      return e.selected = false;
    }).on('click', function() {
      this.selected = !this.selected;
      this.innerHTML = this.selected ? 'favorite' : 'favorite_outline';
      return u(this).toggleClass('active', this.selected);
    });
  };

}).call(this);

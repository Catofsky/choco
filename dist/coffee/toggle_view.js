(function() {
  window.uToggleView = function(config) {
    config.cards.on('click', function() {
      return config.products.removeClass('horizontal');
    });
    return config.list.on('click', function() {
      return config.products.addClass('horizontal');
    });
  };

}).call(this);

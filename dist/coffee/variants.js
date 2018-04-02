(function() {
  window.uVariants = function(config) {
    return config.variants.children().on('click', function() {
      config.variants.children().removeClass('active');
      return u(this).addClass('active');
    });
  };

}).call(this);

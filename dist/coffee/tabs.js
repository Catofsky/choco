(function() {
  var cfg, on_click;

  cfg = {};

  window.uTabs = function(config) {
    cfg = config;
    cfg.tabs.children().on('click', on_click);
    return on_click.call(cfg.tabs.children().first());
  };

  on_click = function() {
    var tab;
    tab = u(this);
    cfg.container.children('._tab_content').removeClass('active').filter(function(n) {
      return u(n).data('tab') === tab.data('tab');
    }).addClass('active');
    cfg.tabs.children().removeClass('active');
    return tab.addClass('active');
  };

}).call(this);

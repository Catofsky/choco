
var lvl = u('#header_keeper').first().offsetTop;
window.addEventListener('scroll', function () {
  var bl = window.scrollY >= lvl;

  u('#header_keeper').first().style.height = bl
    ? u('#header_fix').first().offsetHeight + 'px'
    : 0;

  u('#header_fix').toggleClass('fixed', bl);
});


u('header .bottom a')
  .on('mouseover', function () {
    u('.site_full_width .cat_menu').removeClass('active');
    u('.site_full_width .cat_menu[data-item="' + u(this).data('item') + '"]').addClass('active');
  });


u('.site_full_width .cat_menu')
  .on('mouseleave', function () {
    u(this).removeClass('active');
  });


u('header .top, header .center')
  .on('mouseover', () => {
    u('.site_full_width .cat_menu').removeClass('active');
  });



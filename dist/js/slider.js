(function () {

  var current_slide = 0,
      slides = [],
      preview,
      container,
      wrapper,
      left_arrow,
      right_arrow;

  window.uSlider = function (cfg) {

    wrapper = cfg.wrapper;
    container = cfg.slides;
    preview = cfg.preview;
    left_arrow = cfg.left_arrow;
    right_arrow = cfg.right_arrow;
    magnifier = cfg.magnifier;
    var count = 0;

    container.children().each((s) => {
      s.slide_index = count++;
      var slide = u(s);

      slides.push(slide.data('ref'));

      slide.attr('style', 'background-image: url(' + slide.data('min') + ')');
      slide.on('click', slide_click);
    });

    left_arrow.on('click', left);
    right_arrow.on('click', right);

    show_slide(0);
  };

  function left() {
    if (current_slide > 0)
      slide_click.call(container.children().nodes[current_slide - 1]);
  }

  function right() {
    if (current_slide < slides.length - 1)
      slide_click.call(container.children().nodes[current_slide + 1]);
  }

  function slide_click() {
    var cont = container.first();
    var max = cont.scrollWidth - wrapper.first().offsetWidth;
    var val = this.offsetLeft > max
      ? max
      : this.offsetLeft;

    cont.style.left = -val + 'px';

    show_slide(this.slide_index);
  }

  function set_preview(img) {
    preview.attr('style', 'background-image: url(' + img + ')');
  }

  function show_slide(num) {
    var slide = container.children().nodes[num];

    if (slide !== undefined) {
      current_slide = num;
      set_preview(slides[num]);
      magnifier.children('img').attr('src', u(slide).data('full')); 

      left_arrow.toggleClass('hidden', num === 0);
      right_arrow.toggleClass('hidden', num === slides.length - 1);
    }
  }

})();

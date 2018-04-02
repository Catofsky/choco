(function() {
  var cfg, leave_comment, rating_click;

  cfg = {};

  window.uComment = function(config) {
    var c;
    cfg = config;
    c = 1;
    cfg.rated = 0;
    cfg.rating.children().each(function(e) {
      return e.rated = c++;
    }).on('click', rating_click);
    return cfg.btn.on('click', leave_comment);
  };

  rating_click = function() {
    cfg.rating.children().removeClass('active');
    cfg.rated = this.rated;
    console.log(this.rated);
    return u(this).addClass('active');
  };

  leave_comment = function() {
    var name, rating, text;
    text = cfg.textarea.first().value;
    name = 'Тирион Ланистер';
    rating = '';
    switch (cfg.rated) {
      case 1:
        rating = '<div class="score one">1</div>';
        break;
      case 2:
        rating = '<div class="score two">2</div>';
        break;
      case 3:
        rating = '<div class="score three">3</div>';
        break;
      case 4:
        rating = '<div class="score four">4</div>';
        break;
      case 5:
        rating = '<div class="score five">5</div>';
    }
    if (text === '' || cfg.rated === 0) {
      return;
    }
    cfg.container.replace();
    return u('.comments').append(`<div class="comment">\n    <div class="rating"><span>Оценка:</span>\n    ${rating}\n    </div>\n    <div class="avatar_container">\n      <div class="avatar" style="background-image: url(img/avatar.jpg)"></div>\n    </div>\n    <div class="text_contatiner">\n      <div class="name">${name}</div>\n      <div class="text">${text}</div>\n      <div class="date">18 июня 2018 14:21</div>\n    </div>\n  </div>\n</div>`);
  };

}).call(this);


cfg = {}

window.uComment = (config) ->
    cfg = config
    c = 1
    cfg.rated = 0

    cfg.rating
        .children()
        .each (e) -> e.rated = c++
        .on 'click', rating_click

    cfg.btn
        .on 'click', leave_comment


rating_click = ->
    cfg.rating
        .children()
        .removeClass 'active'

    cfg.rated = @rated
    console.log @rated

    u @
        .addClass 'active'


leave_comment = ->
    text = cfg.textarea.first().value
    name = 'Тирион Ланистер'
    rating = ''

    switch cfg.rated
        when 1
            rating = '<div class="score one">1</div>'
        when 2
            rating = '<div class="score two">2</div>'
        when 3
            rating = '<div class="score three">3</div>'
        when 4
            rating = '<div class="score four">4</div>'
        when 5
            rating = '<div class="score five">5</div>'
    

    if text == '' or cfg.rated == 0 then return

    cfg.container
        .replace()

    u('.comments')
        .append """
        <div class="comment">
            <div class="rating"><span>Оценка:</span>
            #{rating}
            </div>
            <div class="avatar_container">
              <div class="avatar" style="background-image: url(img/avatar.jpg)"></div>
            </div>
            <div class="text_contatiner">
              <div class="name">#{name}</div>
              <div class="text">#{text}</div>
              <div class="date">18 июня 2018 14:21</div>
            </div>
          </div>
        </div>
        """
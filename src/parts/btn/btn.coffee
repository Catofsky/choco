
cfg = {}

window.parts.btn = (config) ->
    cfg = config

    u '.part_btn'
        .each (e) -> e.active = false
        .on 'click', on_click


on_click = ->
    @toggleClass 'active', @active

cfg = {}

window.uCounter = (config) ->
  cfg = config

  cfg.max = parseInt cfg.count.data 'max'
  cfg.min = parseInt cfg.count.data 'min'

  cfg.add.on 'click', add
  cfg.sub.on 'click', sub


add = ->
  num = parseInt cfg.num.html()
  if num isnt cfg.max
    cfg.num.html num + 1

sub = ->
  num = parseInt cfg.num.html()
  if num isnt cfg.min
    cfg.num.html num - 1

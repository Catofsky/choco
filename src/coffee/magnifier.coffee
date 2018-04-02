
cfg = {}

window.uMagnifier = (config) ->
  cfg = config
  cfg.zoom = false
  cfg.pic = cfg.magnifier.children('img')

  cfg.magnifier.on 'click', zoom
  cfg.magnifier.on 'mousemove', on_move
  # cfg.magnifier.on 'mouseleave', leave


zoom = (e) ->
  cfg.magnifier.children().toggleClass 'active', not cfg.zoom

  cfg.zoom = not cfg.zoom
  move e.layerX, e.layerY


on_move = (e) ->
  move e.layerX, e.layerY


move = (lx, ly) ->
  sizeX = cfg.magnifier.first().clientWidth
  sizeY = cfg.magnifier.first().clientHeight

  x = lx / sizeX
  y = ly / sizeY

  msizeX = cfg.pic.first().clientWidth
  msizeY = cfg.pic.first().clientHeight

  if cfg.zoom
    pic_pos (sizeX - msizeX) * x, (sizeY - msizeY) * y


pic_pos = (x, y) ->
  st = cfg.pic.first().style
  st.left = x + 'px'
  st.top = y + 'px'


leave = ->
  cfg.zoom = off
  cfg.magnifier.children().removeClass('active')

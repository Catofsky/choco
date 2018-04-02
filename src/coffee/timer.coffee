
cfg = {}

window.uTimer = (config) ->
  cfg = config
  setInterval handler, 1000


handler = ->
  time = cfg.timer.children().html().split ':'
  time[2]--

  if time[2] < 0
    time[2] = 59
    time[1]--

    if time[1] < 0
      time[1] = 59
      time[0]--

      if time[0] < 0 then time[0] = 0

  if time[2] < 10
    time[2] = '0' + time[2]

  if time[1] < 10
    time[1] = '0' + time[1]

  time = cfg.timer.children().html time.join ':'

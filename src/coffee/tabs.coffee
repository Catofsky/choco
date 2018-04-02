
cfg = {}

window.uTabs = (config) ->
  cfg = config

  cfg
    .tabs
    .children()
    .on 'click', on_click

  on_click.call do cfg.tabs.children().first


on_click = ->
  tab = u(@)

  cfg
    .container
    .children('._tab_content')
    .removeClass 'active'
    .filter (n) -> u(n).data('tab') is tab.data 'tab'
    .addClass 'active'

  cfg
    .tabs
    .children()
    .removeClass 'active'

  tab.addClass 'active'

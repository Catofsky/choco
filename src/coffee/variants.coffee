
window.uVariants = (config) ->
  config
    .variants
    .children()
    .on 'click', ->
      config
        .variants
        .children()
        .removeClass 'active'

      u(@)
        .addClass 'active'

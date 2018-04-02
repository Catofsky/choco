

window.uToggleView = (config) ->
    config.cards.on 'click', ->
        config.products.removeClass 'horizontal'

    config.list.on 'click', ->
        config.products.addClass 'horizontal'
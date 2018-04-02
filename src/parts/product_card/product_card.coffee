
cfg = {}

window.parts.product_card = (config) ->
	cfg = config

	cfg.items
		.on 'mouseover', ->
			cfg.items.removeClass 'open'
			u(@).addClass 'open'

		.on 'mouseleave', ->
			cfg.items.removeClass 'open'

	cfg.hearts
		.each (e) -> e.selected = false
		.on 'click', ->
			@selected = not @selected
			@innerHTML = if @selected then 'favorite' else 'favorite_outline'
			u(@).toggleClass 'active', @selected



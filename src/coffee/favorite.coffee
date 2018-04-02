
cfg = {}

window.uFavorite = (config) ->
	cfg = config

	cfg.favorite
		.each (e) -> e.selected = false
		.on 'click', click


click = ->
	btn = u(@)
	@selected = not @selected
	btn.toggleClass 'active', @selected
	btn.find 'span'
		.html if @selected then 'В избранном' else 'В избранное'

	btn.find 'i'
		.html if @selected then 'favorite' else 'favorite_outline'
	
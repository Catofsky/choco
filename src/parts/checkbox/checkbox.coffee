
cfg = {}

window.parts.checkbox = (config) ->
	cfg = config

	cfg.checkbox
		.each (e) -> onClick.call e
		.on 'click', onClick
		

onClick = ->
	self = u @
	cb = self.find 'input'
	self.find 'i'
		.html if cb.first().checked then 'check_box' else 'check_box_outline_blank'

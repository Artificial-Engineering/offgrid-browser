
setTimeout(function() {

	const _browse = Polyfillr.get('state-browse').elements[0];
	const _dialog = Polyfillr.get('state-dialog').elements[0];


	let input = _dialog.querySelector('input.command');
	if (input !== null) {

		input.value = 'search /r/programming for samaritan';
		input.onchange();

	}

}, 2000);


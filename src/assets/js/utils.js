// NPM modules

/**
 * Use any string to generate a CSS class or id name.
 */
function classify(str) {
	return str.toLowerCase()
		.replace(/\s+/g, '-')		 // Replace spaces with -
		.replace(/[^\w\-]+/g, '') // Remove all non-word chars
		.replace(/\-\-+/g, '-')	 // Replace multiple - with single -
		.replace(/^-+/, '')			 // Trim - from start of text
		.replace(/-+$/, '');			// Trim - from end of text
}

/**
 * Throttle a function call.
 */
function throttle(fn, threshold, scope) {
	threshold || (threshold = 250);
	var last,
		deferTimer;
	return function() {
		var context = scope || this;

		var now = +new Date(),
			args = arguments;
		if (last && now < last + threshold) {
			// hold on to it
			clearTimeout(deferTimer);
			deferTimer = setTimeout(function() {
				last = now;
				fn.apply(context, args);
			}, threshold);
		} else {
			last = now;
			fn.apply(context, args);
		}
	};
};

/**
 * calculate element position from document top
 */
function getOffsetTop(el) {
	//www.gomakethings.com/how-to-get-an-elements-distance-from-the-top-of-the-page-with-vanilla-javascript/
	var distance = 0;

	// Loop up the DOM
	if (el.offsetParent) {
		do {
			distance += el.offsetTop;
			el = el.offsetParent;
		} while (el);
	}

	// Return our distance
	return distance < 0 ? 0 : distance;
}


module.exports = {
	classify: classify,
	throttle: throttle,
	getOffsetTop: getOffsetTop
}

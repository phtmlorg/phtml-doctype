module.exports = {
	'basic': {
		message: 'supports basic usage'
	},
	'empty': {
		message: 'supports basic usage on an empty file'
	},
	'basic:html4': {
		message: 'supports { doctype: "HTML 4" } usage',
		options: {
			doctype: 'HTML4'
		}
	},
	'replace': {
		message: 'supports { replace: true } usage',
		options: {
			replace: true
		}
	},
	'replace:xhtml': {
		message: 'supports { replace: "xhtml" } usage',
		options: {
			replace: 'xhtml'
		}
	},
	'safe:basic': {
		message: 'supports { safe: true } usage',
		options: {
			safe: true
		},
		source: 'basic.html',
		expect: 'basic.expect.html'
	},
	'safe:empty': {
		message: 'supports { safe: true } usage',
		options: {
			safe: true
		},
		source: 'empty.html',
		expect: 'empty.html'
	}
};

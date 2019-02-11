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
	}
};

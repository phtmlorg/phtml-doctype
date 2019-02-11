import phtml from 'phtml';

export default new phtml.Plugin('phtml-doctype', opts => {
	const doctype = doctypes[formatDoctype(Object(opts).doctype)] || doctypes[formatDoctype(Object(opts).replace)] || doctypes['html5'];
	const isReplacingDoctype = 'replace' in Object(opts) ? Boolean(opts.replace) : true;

	return root => {
		const firstNode = root.first;
		const hasDoctype = firstNode && firstNode.type === 'doctype';
		const newDoctypeNode = isReplacingDoctype || !hasDoctype ? new phtml.Doctype(doctype) : null;

		if (firstNode) {
			if (hasDoctype) {
				if (isReplacingDoctype) {
					firstNode.replaceWith(newDoctypeNode);
				}
			} else {
				firstNode.before(newDoctypeNode);
			}
		} else {
			root.append(newDoctypeNode);
		}
	};
});

const formatDoctype = doctype => String(doctype || '').trim().toLowerCase().replace(/\s/g, '')

const doctypes = {
	'html': {
		name: 'html'
	},
	'html5': {
		name: 'html'
	},
	'html4': {
		name: 'HTML',
		publicId: '-//W3C//DTD HTML 4.01//EN',
		systemId: 'http://www.w3.org/TR/html4/strict.dtd'
	},
	'html4.01strict': {
		name: 'HTML',
		publicId: '-//W3C//DTD HTML 4.01//EN',
		systemId: 'http://www.w3.org/TR/html4/strict.dtd'
	},
	'html4.01transitional': {
		name: 'HTML',
		publicId: '-//W3C//DTD HTML 4.01 Transitional//EN',
		systemId: 'http://www.w3.org/TR/html4/loose.dtd'
	},
	'html4.01frameset': {
		name: 'HTML',
		publicId: '-//W3C//DTD HTML 4.01 Frameset//EN',
		systemId: 'http://www.w3.org/TR/html4/frameset.dtd'
	},
	'xhtml': {
		name: 'html',
		publicId: '-//W3C//DTD XHTML 1.1//EN',
		systemId: 'http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd'
	},
	'xhtml1.1': {
		name: 'html',
		publicId: '-//W3C//DTD XHTML 1.1//EN',
		systemId: 'http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd'
	},
	'xhtml1': {
		name: 'html',
		publicId: '-//W3C//DTD XHTML 1.0 Strict//EN',
		systemId: 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd'
	},
	'xhtml1.0strict': {
		name: 'html',
		publicId: '-//W3C//DTD XHTML 1.0 Strict//EN',
		systemId: 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd'
	},
	'xhtml1.0transitional': {
		name: 'html',
		publicId: '-//W3C//DTD XHTML 1.0 Transitional//EN',
		systemId: 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'
	},
	'xhtml1.0frameset': {
		name: 'html',
		publicId: '-//W3C//DTD XHTML 1.0 Frameset//EN',
		systemId: 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd'
	}
};

# pHTML Doctype [<img src="https://phtmlorg.github.io/phtml/logo.svg" alt="pHTML" width="90" height="90" align="right">][phtml]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[pHTML Doctype] lets you automatically add the doctype in HTML.

```html
<html>
  <title>pHTML Doctype</title>
</html>

<!-- becomes -->

<!doctype html><html>
  <title>pHTML Doctype</title>
</html>
```

## Usage

Transform HTML files directly from the command line:

```bash
npx phtml source.html output.html -p @phtml/doctype
```

### Node

Add [pHTML Doctype] to your project:

```bash
npm install @phtml/doctype --save-dev
```

Use [pHTML Doctype] to process your HTML:

```js
const phtmlDoctype = require('@phtml/doctype');

phtmlDoctype.process(YOUR_HTML /*, processOptions, pluginOptions */);
```

Or use it as a [pHTML] plugin:

```js
const phtml = require('phtml');
const phtmlDoctype = require('@phtml/doctype');

phtml([
  phtmlDoctype(/* pluginOptions */)
]).process(YOUR_HTML /*, processOptions */);
```

[pHTML Doctype] runs in all Node environments, with special instructions for:

| [Node](INSTALL.md#node) | [pHTML CLI](INSTALL.md#phtml-cli) | [Webpack](INSTALL.md#webpack) | [Create React App](INSTALL.md#create-react-app) | [Gulp](INSTALL.md#gulp) | [Grunt](INSTALL.md#grunt) |
| --- | --- | --- | --- | --- | --- |

## Options

### doctype

The `doctype` option specifies the doctype being added to the page.

```js
phtmlDoctype({ doctype: 'html4' });
```

```html
<html>
  <title>pHTML Doctype</title>
</html>

<!-- becomes -->

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
  <title>pHTML Doctype</title>
</html>
```

Options include case-insensitive, space-insentive variations of the following:

- `HTML` or `HTML 5`
- `HTML 4` or `HTML 4.01 Strict`
- `HTML 4.01 Transitional`
- `HTML 4.01 Frameset`
- `XHTML` or `XHTML 1.1`
- `XHTML 1` or `XHTML 1.0 Strict`
- `XHTML 1.0 Transitional`
- `XHTML 1.0 Frameset`

### replace

The `replace` option determines whether the doctype will be replaced, whether
or not it exists.

```js
phtmlDoctype({ replace: true });
```

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
  <title>pHTML Doctype</title>
</html>

<!-- becomes -->

<!doctype html>
<html>
  <title>pHTML Doctype</title>
</html>
```

Optionally, the `replace` option can be given a string, which will work as a
fallback to the [doctype](#doctype) option.

### safe

The `safe` option determines whether the doctype should only be included when a
top level `html`, `head`, or `body` tag is present. By default, this setting is
`false` and the doctype is added regardless.

```js
phtmlDoctype({ safe: true });
```

```html
<custom-element></custom-element>

<!-- becomes -->

<custom-element></custom-element>
```

```html
<html>
  <custom-element></custom-element>
</html>

<!-- becomes -->

<!doctype html>
<html>
  <custom-element></custom-element>
</html>
```

[cli-img]: https://img.shields.io/travis/phtmlorg/phtml-doctype.svg
[cli-url]: https://travis-ci.org/phtmlorg/phtml-doctype
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/phtmlorg/phtml
[npm-img]: https://img.shields.io/npm/v/@phtml/doctype.svg
[npm-url]: https://www.npmjs.com/package/@phtml/doctype

[pHTML]: https://github.com/phtmlorg/phtml
[pHTML Doctype]: https://github.com/phtmlorg/phtml-doctype

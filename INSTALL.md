# Installing pHTML Doctype

[pHTML Doctype] runs in all Node environments, with special instructions for:

| [Node](#node) | [CLI](#phtml-cli) | [Eleventy](#eleventy) | [Gulp](#gulp) | [Grunt](#grunt) |
| --- | --- | --- | --- | --- |

## Node

Add [pHTML Doctype] to your project:

```bash
npm install @phtmlorg/doctype --save-dev
```

Use [pHTML Doctype] to process your HTML:

```js
const phtmlDoctype = require('@phtmlorg/doctype')

phtmlDoctype.process(YOUR_HTML /*, processOptions, pluginOptions */)
```

Or use it as a [pHTML] plugin:

```js
const phtml = require('phtml')
const phtmlDoctype = require('@phtmlorg/doctype')

phtml([
  phtmlDoctype(/* pluginOptions */)
]).process(YOUR_HTML /*, processOptions */)
```

## CLI

Transform HTML files directly from the command line:

```bash
npx phtml source.html output.html -p @phtmlorg/doctype
```

Alternatively, add [pHTML Doctype] to your `phtml.config.js` configuration file:

```js
module.exports = {
  plugins: [
    ['@phtmlorg/doctype', /* pluginOptions */]
  ]
}
```

## Eleventy

Add [pHTML Eleventy] and [pHTML Doctype] to your Eleventy project:

```sh
npm install @phtmlorg/doctype @phtml/11ty --save-dev
```

Use [pHTML Eleventy] and [pHTML Doctype] in your Eleventy configuration:

```js
const phtml11ty = require('@phtml/11ty')
const phtmlDoctype = require('@phtmlorg/doctype')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(phtml11ty, {
    use: [
      phtmlDoctype(/* pluginOptions */)
    ]
  })
}
```

## Gulp

Add [Gulp pHTML] and [pHTML Doctype] to your project:

```bash
npm install @phtmlorg/doctype gulp-phtml --save-dev
```

Use [Gulp pHTML] and [pHTML Doctype] in your Gulpfile:

```js
const gulp = require('gulp')
const gulpPhtml = require('gulp-phtml')
const phtmlDoctype = require('@phtmlorg/doctype')

gulp.task('html',
  () => gulp.src('./src/*.html').pipe(
    gulpPhtml({
      plugins: [
        phtmlDoctype(/* pluginOptions */)
      ]
    })
  ).pipe(
    gulp.dest('dist')
  )
)
```

## Grunt

Add [Grunt pHTML] to your project:

```bash
npm install grunt-phtml --save-dev
```

Use [Grunt pHTML] and [pHTML Doctype] in your Gruntfile:

```js
const phtmlDoctype = require('@phtmlorg/doctype')

grunt.loadNpmTasks('grunt-phtml')

grunt.initConfig({
  phtml: {
    options: {
      plugins: [
        phtmlDoctype(/* pluginOptions */)
      ]
    },
    dist: {
      files: [{
        expand: true,
        src: 'src/*.html',
        dest: 'dest'
      }]
    }
  }
})
```

[Gulp pHTML]: https://github.com/phtmlorg/gulp-phtml
[Grunt pHTML]: https://github.com/phtmlorg/grunt-phtml
[pHTML]: https://github.com/phtmlorg/phtml
[pHTML Eleventy]: https://github.com/phtmlorg/phtml-11ty
[pHTML Doctype]: https://github.com/phtmlorg/phtml-doctype

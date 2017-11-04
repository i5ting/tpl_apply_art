# tpl_apply_art

tpl_apply_art with handlebars

[![npm version](https://badge.fury.io/js/tpl_apply_art.svg)](http://badge.fury.io/js/tpl_apply_art)

## Install

	npm install --save tpl_apply_art
	
## Test

	npm test
	
## Usage


```
var tpl = require('./index');


var source = process.cwd() + '/tpl.js'
var dest = process.cwd() + '/test/tpl.generate.js'


tpl.tpl_apply_art(source, {
	title: "My New Post", body: "This is my first post!"
}, dest);

```

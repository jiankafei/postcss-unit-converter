'use strict';
const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const coverter = require('./index');

const css = fs.readFileSync(path.resolve(__dirname, 'index.css'), 'utf8');
const processCSS = postcss(coverter()).process(css).css;

fs.writeFile(path.resolve(__dirname, '..', 'static/index.css'), processCSS, err => {
	if (err) throw err;
	console.log('Translate unit success.');
});

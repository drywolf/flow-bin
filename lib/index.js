'use strict';
var path = require('path');
var BinWrapper = require('bin-wrapper');

var VERSION = '0.16.0';
var BASE = 'https://github.com/facebook/flow/releases/download/v' + VERSION + '/';
var WIN_BASE = 'http://www.ocamlpro.com/pub/ocpwin/flow-builds/flow-simple-windows-20141127.zip';

var isWin = /^win/.test(process.platform);

if (isWin)
{
	module.exports = new BinWrapper()
		.src(WIN_BASE, 'win32', 'x64')
		.dest(path.join(__dirname, '../vendor'))
		.use('flow64.exe');
}
else
{
	module.exports = new BinWrapper()
		.src(BASE + 'flow-osx-v' + VERSION + '.zip', 'darwin')
		.src(BASE + 'flow-linux64-v' + VERSION + '.zip', 'linux', 'x64')
		.dest(path.join(__dirname, '../vendor'))
		.use('flow');
}

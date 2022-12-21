#!/usr/bin/env node

const { program } = require('commander');

program
	.argument('<string>', 'cases path')
	.option('-c, --config <char>')
	.option('-o, --output <char>');

program.parse();

const options = program.opts();
const limit = options.first ? 1 : undefined;
console.log(program.args[0].split(options.separator, limit));
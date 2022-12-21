#!/usr/bin/env node

const { program } = require('commander');
const { generate } = require('../build/generator/generate');

program
	.version('0.0.1')
	.option('--cases <char>')
	.option('--commands <char>')
	.option('--output <char>');

program.parse(process.argv);

generate(program.opts())

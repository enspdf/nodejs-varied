#! /usr/bin/env node

const { program } = require('commander')

const resize = require('./commands/resize')
const { version, name } = require('../package.json')

program
  .name(name)
  .version(version)
  .option('-o, --overwrite', "Overwrite the file for the processed image")

program
  .command('resize <file>')
  .option('--width <width>', 'Width of the processed image', value => parseFloat(value))
  .option('--height <height>', "Height of the processed image", value => parseFloat(value))
  .description('Resize an image')
  .action(resize)

program.parse(process.argv)
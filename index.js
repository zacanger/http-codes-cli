#!/usr/bin/env node

'use strict'

const { STATUS_CODES } = require('http')
const arg = process.argv[2]

if (!arg) {
  return console.log('usage example: httpcodes 401')
}

if (arg === 'all') {
  return console.log(JSON.stringify(STATUS_CODES, null, 2))
}

if (STATUS_CODES[arg]) {
  return console.log(arg, STATUS_CODES[arg])
}

console.log('please provide a valid code')

#!/usr/bin/env node

'use strict'

const { STATUS_CODES } = require('http')
const arg = process.argv[2]
const help = () => console.log(`
  please provide a valid http status code, or all
  usage example:
  httpcodes 418
  httpcodes all
`)

if (!arg) {
  return help()
}

if (arg === 'all') {
  return console.log(JSON.stringify(STATUS_CODES, null, 2))
}

if (STATUS_CODES[arg]) {
  return console.log(`${arg}: ${STATUS_CODES[arg]}`)
}

return help()

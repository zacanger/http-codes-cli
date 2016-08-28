#!/usr/bin/env node

'use strict'

const { STATUS_CODES } = require('http')
const arg = process.argv[2]
const log = console.log
const help = () => log(`
  please provide a valid http status code, or all, or full string
  usage example:
  httpcodes 418
  httpcodes all
  httpcodes 'Moved Permanently'
`)

if (!arg) {
  return help()
}

if (arg === 'all') {
  return log(JSON.stringify(STATUS_CODES, null, 2))
}

if (STATUS_CODES[arg]) {
  return log(`${arg}: ${STATUS_CODES[arg]}`)
}

const getkeybyvalue = (object, value) =>
  Object.keys(object).find(key => object[key] === value)

if (getkeybyvalue(STATUS_CODES, arg)) {
  return log (getkeybyvalue(STATUS_CODES, arg))
}

return help()

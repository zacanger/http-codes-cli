#!/usr/bin/env node

const statusCodes = require('http').STATUS_CODES
const log = console.log
const help = () => log(`
  please provide a valid http status code, or all, or full string
  usage example:
  httpcodes 418
  httpcodes all
  httpcodes 'Moved Permanently'
`)

const main = (arg) => {
  if (!arg) {
    return help()
  }

  if (arg === 'all') {
    return log(JSON.stringify(statusCodes, null, 2))
  }

  if (statusCodes[arg]) {
    return log(`${arg}: ${statusCodes[arg]}`)
  }

  const getKeyByVal = (object, value) =>
    Object.keys(object).find((key) => object[key].toLowerCase() === value.toLowerCase())

  if (getKeyByVal(statusCodes, arg)) {
    return log(getKeyByVal(statusCodes, arg))
  }

  return help()
}

main(process.argv[2])

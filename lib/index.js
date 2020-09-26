"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var log = console.log;
var help = function () {
    return log("\n  please provide a valid http status code, or all, or full string\n  usage example:\n  httpcodes 418\n  httpcodes all\n  httpcodes 'Moved Permanently'\n");
};
var main = function (arg) {
    if (arg === void 0) { arg = ''; }
    if (!arg) {
        return help();
    }
    if (arg === 'all') {
        return log(JSON.stringify(http_1.STATUS_CODES, null, 2));
    }
    if (http_1.STATUS_CODES[arg]) {
        return log(arg + ": " + http_1.STATUS_CODES[arg]);
    }
    var getKeyByVal = function (object, value) {
        return Object.keys(object).find(function (key) { return object[key].toLowerCase() === value.toLowerCase(); });
    };
    if (getKeyByVal(http_1.STATUS_CODES, arg)) {
        return log(getKeyByVal(http_1.STATUS_CODES, arg));
    }
    return help();
};
main(process.argv[2]);

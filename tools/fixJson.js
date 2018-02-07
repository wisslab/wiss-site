#!/usr/bin/node
var fs = require("fs")
var jp = require("jsonpath")
var contents = fs.readFileSync(process.argv[2], 'utf8');
contents = contents.replace(/date-parts/g, "year")
contents = contents.replace(/\\\\/g, "").replace(/<span class=\\\"nocase\\\">/g, "").replace(/<\/span>/g, "")
data = JSON.parse(contents)
jp.apply(data, "$[*].issued.year", function(value){return value[0][0]})
jp.apply(data, "$[*]", function(value){if (!value.issued) {value.issued={year: -1}};return value})
console.log(JSON.stringify(data,null,2))

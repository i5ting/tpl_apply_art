var tpl = require('./index');

// way 1
var source = process.cwd() + '/tpl.art'
var dest = process.cwd() + '/tpl.generate.js'

tpl.tpl_apply(source, {
  people: [
   {firstName: "Yehuda", lastName: "Katz"},
   {firstName: "Carl", lastName: "Lerche"},
   {firstName: "Alan", lastName: "Johnson"}
 ]
}, dest);
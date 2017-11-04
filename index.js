'use strict'

var fs = require('fs')
var BufferHelper = require('bufferhelper')
var art = require('art-template')

require('log1')(true)

/**
 * Basic
 */
function tpl_apply(template_path, data_obj, dest_file_path) {
	var rs = fs.createReadStream(template_path, { bufferSize: 11 })
	var bufferHelper = new BufferHelper()

	rs.on("data", function (trunk) {
		bufferHelper.concat(trunk)
	})

	rs.on("end", function () {
		var source = bufferHelper.toBuffer().toString('utf8')
		var render = art.compile(source, {
			escape: false
		})

		// log(template)
		var content = render(data_obj)

		fs.writeFile(dest_file_path, content, function (err) {
			if (err) throw err
			log('It\'s saved!')
		})

	})
}

exports.tpl_apply = tpl_apply

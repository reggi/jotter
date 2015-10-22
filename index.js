#!/usr/bin/env node

var repl = require('repl')
var Promise = require('bluebird')
var moment = require('moment')
var fs = Promise.promisifyAll(require('fs-extra'))
var csv = Promise.promisifyAll(require('csv'))

var prepText = function (text) {
  var data = [{
    'text': text.replace(/^\(|\)$|\n/ig, ''),
    'date': new Date()
  }]
  return csv.stringifyAsync(data)
}

var writeToFile = function (text) {
  var fileStamp = moment().format('YYYY-MM-DD')
  var fileName = './' + fileStamp + '-jotter.csv'
  return prepText(text).then(function (csv) {
    return fs.ensureFileAsync(fileName).then(function () {
      return csv
    })
  }).then(function (csv) {
    console.log(csv)
    return fs.appendFileAsync(fileName, csv)
  })
}

repl.start({
  ignoreUndefined: true,
  prompt: '> ',
  eval: function (text, context, filename, callback) {
    return writeToFile(text).then(function () {
      return callback(null, 'ok')
    })
  }
})

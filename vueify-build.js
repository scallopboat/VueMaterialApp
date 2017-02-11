var fs = require("fs");
var browserify = require('browserify');
var vueify = require('vueify');

browserify('www/main.js')
  .transform(vueify)
//  .plugin('vueify/plugins/extract-css', {
//    out: 'www/bundle.css' // can also be a WritableStream
//  })
  .bundle()
  .pipe(fs.createWriteStream("www/bundle.js"))
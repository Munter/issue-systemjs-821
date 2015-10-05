var expect = require('unexpected');
var jsdomify = require('jsdomify');

jsdomify.create();

var System = require('systemjs');
System.config({ baseURL: 'file://' + process.cwd() + '/app' });
require('../app/config');

it('should load jquery', function () {
  return System.import('jquery').then(function ($) {
    return expect($, 'to be a function');
  })
})

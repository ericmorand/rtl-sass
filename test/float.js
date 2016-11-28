const t = require('tap');
const path = require('path');
const fs = require('fs');
const sass = require('node-sass');

var tests = [
  'left',
  'right',
  'none'
];

var cleanCSS = require('./_lib/clean-css');

tests.forEach(function(test) {
  t.test('float ' + test, function (t) {
    t.plan(1);

    var file = path.resolve('test/float/' + test + '/index.scss');
    var expected = fs.readFileSync(path.resolve('test/float/' + test + '/expected.css')).toString();

    sass.render({
      file: file
    }, function(err, result) {
      if (err) {
        t.fail(err);
      }
      else {
        t.equal(cleanCSS(result.css.toString()), cleanCSS(expected));
      }
    });
  });
});


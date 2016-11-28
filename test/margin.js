const t = require('tap');
const path = require('path');
const fs = require('fs');
const sass = require('node-sass');

var tests = [
  'one',
  'two',
  'three',
  'four'
];

var cleanCSS = require('./_lib/clean-css');

tests.forEach(function(test) {
  t.test('margin with ' + test + ' argument(s)', function (t) {
    t.plan(1);

    var file = path.resolve('test/margin/' + test + '/index.scss');
    var expected = fs.readFileSync(path.resolve('test/margin/' + test + '/expected.css')).toString();

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


const t = require('tap');
const path = require('path');
const fs = require('fs');
const sass = require('node-sass');

var tests = [
  {
    name: 'declaration',
    invalid: [
      'null-property',
      'null-values'
    ]
  },
  {
    name: 'declaration-1-to-4',
    invalid: [
      'null-one',
      'null-property'
    ]
  },
  {
    name: 'declaration-1-to-4-corner',
    invalid: [
      'null-one',
      'null-property'
    ]
  },
  {
    name: 'declaration-value',
    invalid: [
      'null-property',
      'null-value'
    ]
  }
];

var cleanCSS = require('./_lib/clean-css');

tests.forEach(function (test) {
  t.test('api ' + test.name, function (t) {
    t.plan(1 + test.invalid.length);

    var file = path.resolve('test/api/' + test.name + '/index.scss');
    var expected = fs.readFileSync(path.resolve('test/api/' + test.name + '/expected.css')).toString();

    sass.render({
      file: file
    }, function (err, result) {
      if (err) {
        t.fail(err);
      }
      else {
        t.equal(cleanCSS(result.css.toString()), cleanCSS(expected));
      }
    });

    test.invalid.forEach(function(invalid) {
      var file = path.resolve('test/api/' + test.name + '/invalid/' + invalid + '.scss');

      sass.render({
        file: file
      }, function (err, result) {
        if (err) {
          t.pass(err);
        }
        else {
          t.fail('Should fail because of invalid use of ' + test.name);
        }
      });
    });
  });
});

const CleanCSS = require('clean-css');

module.exports = function(css) {
  var c = new CleanCSS({
    level: {
      1: {
        all: false
      },
      2: {
        all: false,
        mergeAdjacentRules: true,
        mergeNonAdjacentRules: true,
        removeEmpty: true
      }
    }
  });

  return c.minify(css).styles;
};

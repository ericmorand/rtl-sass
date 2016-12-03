const CleanCSS = require('clean-css');

module.exports = function(css) {
  var c = new CleanCSS({advanced: false});

  return c.minify(css).styles;
};

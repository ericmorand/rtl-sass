const CleanCSS = require('clean-css');

module.exports = function(css) {
  var c = new CleanCSS();

  return c.minify(css).styles;
};

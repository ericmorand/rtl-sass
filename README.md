# Right-to-Left [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

**Right-to-left done right with Sass**

Right-to-left makes supporting right-to-left languages in Sass super simple. Use the provided mixins instead of their belonging CSS declarations and you're done!

## Provided mixins

### Alignment

* `text-align($value)`

### Border

* `border($top, $right: null, $bottom: null, $left: null)`
* `border-bottom-left-radius($value)`
* `border-bottom-right-radius($value)`
* `border-left($value)`
* `border-left-color($value)`
* `border-left-style($value)`
* `border-left-width($value)`
* `border-right($value)`
* `border-right-color($value)`
* `border-right-style($value)`
* `border-right-width($value)`
* `border-top-left-radius($value)`
* `border-top-right-radius($value)`

### Margin

* `margin($top, $right: null, $bottom: null, $left: null)`
* `margin-left($value)`
* `margin-right($value)`

### Padding

* `padding($top, $right: null, $bottom: null, $left: null)`
* `padding-left($value)`
* `padding-right($value)`

### Positioning

* `float($value)`
* `left($value)` 
* `right($value)`

## API

Right-to-left uses the following low-level mixins to implement its right-to-left support. Feel free to use them to provide right-to-left support to declarations that are not (yet ^^) supported by rtl-sass:

* `rtl-declaration($property, $leftOrRight, $suffix, $value)`
    
   Used to provide right-to-left support for declarations where the position is part of the property name - for example `border-left-color(tomato)`.
   
   To add right-to-left support for the hypothetical CSS declaration `my-dummy-left-padding: 20px`, this mixin would be called with the following form:
   
   `@include rtl-declaration(my-dummy-, left, -padding, 20px);`
      
* `rtl-declaration-1-to-4($property, $one, $two: null, $three: null, $four: null)`

   Used to provide right-to-left support for declarations using 1-to-4 value syntax - for example `margin: 20px, 10px`. This mixin conforms to CSS specifications [regarding the number of arguments](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#Tricky_edge_cases).
  
   To add right-to-left support for the hypothetical CSS declaration `dummy: 20px 10px`, this mixin would be called with the following form:
   
   `@include rtl-declaration-1-to-4(dummy, 20px, 10px);`
  
* `rtl-declaration-value($property, $value)`

   Used to provide right-to-left support for declarations where the position if the value of the property - for example `text-align: left`.
   
   To add right-to-left support for the hypothetical CSS declaration `dummy: left`, this mixin would be called with the following form:
   
   `@include rtl-declaration-value(dummy, left);`

## How to use

First, install rtl-sass:

`npm i rtl-sass --save-dev`

Then import the mixins into your Sass file:
 
`@import "{relative/path/to/node_modules}/rtl-sass/src/rtl";`

## Contributing

* Fork the main repository
* Code
* Implement tests using [node-tap](https://github.com/tapjs/node-tap)
* Issue a pull request keeping in mind that all pull requests must reference an issue in the issue queue

## License

Apache-2.0 © [Eric MORAND]()

[npm-image]: https://badge.fury.io/js/rtl-sass.svg
[npm-url]: https://npmjs.org/package/rtl-sass
[travis-image]: https://travis-ci.org/ericmorand/rtl-sass.svg?branch=master
[travis-url]: https://travis-ci.org/ericmorand/rtl-sass
[daviddm-image]: https://david-dm.org/ericmorand/rtl-sass.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/ericmorand/rtl-sass
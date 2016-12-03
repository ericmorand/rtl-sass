# Right-to-Left [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

**Right-to-left done right with Sass**

Right-to-left makes supporting right-to-left languages in Sass super simple. Use the provided mixins instead of their belonging CSS declarations and you're done!

## Provided mixins

### Alignment

* `rtl-sass-text-align($value)`

### Border

* `rtl-sass-border-bottom-left-radius($value)`
* `rtl-sass-border-bottom-right-radius($value)`
* `rtl-sass-border-color($top, $right: null, $bottom: null, $left: null)`
* `rtl-sass-border-left($value)`
* `rtl-sass-border-left-color($value)`
* `rtl-sass-border-left-style($value)`
* `rtl-sass-border-left-width($value)`
* `rtl-sass-border-radius($topLeft, $topRight: null, $bottomRight: null, $bottomLeft: null)`
* `rtl-sass-border-right($value)`
* `rtl-sass-border-right-color($value)`
* `rtl-sass-border-right-style($value)`
* `rtl-sass-border-right-width($value)`
* `rtl-sass-border-style($top, $right: null, $bottom: null, $left: null)`
* `rtl-sass-border-top-left-radius($value)`
* `rtl-sass-border-top-right-radius($value)`
* `rtl-sass-border-width($top, $right: null, $bottom: null, $left: null)`

### Margin

* `rtl-sass-margin($top, $right: null, $bottom: null, $left: null)`
* `rtl-sass-margin-left($value)`
* `rtl-sass-margin-right($value)`

### Padding

* `rtl-sass-padding($top, $right: null, $bottom: null, $left: null)`
* `rtl-sass-padding-left($value)`
* `rtl-sass-padding-right($value)`

### Positioning

* `rtl-sass-float($value)`
* `rtl-sass-left($value)` 
* `rtl-sass-right($value)`

## API

### Functions

Right-to-left uses the following low-level functions to implement its right-to-left support.

* `extract-1-to-4-values($one, $two: null, $three: null, $four: null)`

  Returns a [Sass List](http://sass-lang.com/documentation/Sass/Script/Value/List.html) containing four values conforming to CSS specifications regarding the number of arguments of 1-to-4 declarations: if it is passed four values, they are returned as-it; if `$four` is missing, it is the same as `$two`; if `$three` is missing, it is the same as `$one`; if `$two` is missing, it is the same as `$one`.

### Mixins

Right-to-left uses the following low-level mixins to implement its right-to-left support. Feel free to use them to provide right-to-left support to declarations that are not (yet ^^) supported by rtl-sass.
      
* `rtl-sass-declaration($property, $leftToRightValue, $rightToLeftValue)`

   The lowest-level API mixin, called by all other mixins of the rtl-sass API. Provides right-to-left support by explicitly passing *ltr* and *rtl* values.
   
   To mimic the hypothetical CSS declaration...
    
   ```
   [dir="ltr"] .dummy {
       dummy-property: left-to-right-value;
   }
   
   [dir="rtl"] .dummy {
       dummy-property: right-to-left-value;
   }
   ```
   
   ...this mixin would be called with the following form:
   
   `@include rtl-sass-declaration(dummy-property, left-to-right-value, right-to-left-value);`
      
* `rtl-sass-declaration-1-to-4($property, $top, $right: null, $bottom: null, $left: null)`

   Used to provide right-to-left support for *side-related* declarations using 1-to-4 value syntax - for example `margin: 20px 10px`. This mixin conforms to CSS specifications regarding the number of arguments: if it is passed four values, they set top, right, bottom and left in that order; if `$left` is missing, it is the same as `$right`; if `$bottom` is missing, it is the same as `$top`; if `$right` is missing, it is the same as `$top`.
   
   `$property` can be either a [Sass String](http://sass-lang.com/documentation/Sass/Script/Value/String.html) or a [Sass List](http://sass-lang.com/documentation/Sass/Script/Value/List.html). In the latter case, the first element of the list is considered as the property prefix and the second one (if any) as the property suffix. Any additional element of the list is ignored.
  
   To add right-to-left support for the hypothetical CSS declaration `dummy: 20px 10px 5px 0px`, this mixin would be called with one of the following forms:
   
   `@include rtl-sass-declaration-1-to-4(dummy, 20px, 10px, 5px, 0px);`
   
   `@include rtl-sass-declaration-1-to-4((dummy), 20px, 10px, 5px, 0px);`
   
   ...and would compile into:
   
   ```
   .test {
       dummy-top: 20px;
       dummy-bottom: 5px;
   }
   
   [dir=ltr] .test {
       dummy-right: 10px;
       dummy-left: 0;
   }
   
   [dir=rtl] .test {
       dummy-right: 0;
       dummy-left: 10px;
   }   
   ```
   
   To add right-to-left support for the hypothetical CSS declaration `dummy-width: 20px 10px 5px 0px`, this mixin would be called with the following form...
      
   `@include rtl-sass-declaration-1-to-4((dummy, width), 20px, 10px, 5px, 0px);`
   
   ...and would compile into:
   
   ```
   .test {
       dummy-top-width: 20px;
       dummy-bottom-width: 5px;
   }
   
   [dir=ltr] .test {
       dummy-right-width: 10px;
       dummy-left-width: 0;
   }
   
   [dir=rtl] .test {
       dummy-right-width: 0;
       dummy-left-width: 10px;
   }
   ```
 
* `rtl-sass-declaration-1-to-4-corner($property, $topLeft, $topRight: null, $bottomRight: null, $bottomLeft: null)`

   Used to provide right-to-left support for *corner-related* declarations using 1-to-4 value syntax - for example `border-radius: 20px 10px`. This mixin conforms to CSS specifications regarding the number of arguments: if it is passed four values, they set top-left, top-right, bottom-right and bottom-left in that order; if `$bottomLeft` is omitted it is the same as `$topRight`; if `$bottomRight` is omitted it is the same as `$topLeft`; if `$topRight` is omitted it is the same as `$topLeft`.
   
   `$property` can be either a [Sass String](http://sass-lang.com/documentation/Sass/Script/Value/String.html) or a [Sass List](http://sass-lang.com/documentation/Sass/Script/Value/List.html). In the latter case, the first element of the list is considered as the property prefix and the second one (if any) as the property suffix. Any additional element of the list is ignored.
  
   To add right-to-left support for the hypothetical CSS declaration `dummy: 20px 10px 5px 0px`, this mixin would be called with one of the following forms:
   
   `@include rtl-sass-declaration-1-to-4-corner(dummy, 20px, 10px, 5px, 0px);`
   
   `@include rtl-sass-declaration-1-to-4-corner((dummy), 20px, 10px, 5px, 0px);`
   
   ...and would compile into:
   
   ```
   [dir=ltr] .test {
       dummy-top-left: 20px;
       dummy-top-right: 10px;
       dummy-bottom-right: 5px;
       dummy-bottom-left: 0;
   }
      
   [dir=rtl] .test {
       dummy-top-left: 10px;
       dummy-top-right: 20px;
       dummy-bottom-right: 0;
       dummy-bottom-left: 5px;
   }
   ```
   
   To add right-to-left support for the hypothetical CSS declaration `dummy-radius: 20px 10px 5px 0px`, this mixin would be called with the following form...
      
   `@include rtl-sass-declaration-1-to-4-corner((dummy, radius), 20px, 10px, 5px, 0px);`
   
   ...and would compile into:
   
   ```
   [dir=ltr] .test {
       dummy-top-left-radius: 20px;
       dummy-top-right-radius: 10px;
       dummy-bottom-right-radius: 5px;
       dummy-bottom-left-radius: 0;
   }
   
   [dir=rtl] .test {
       dummy-top-left-radius: 10px;
       dummy-top-right-radius: 20px;
       dummy-bottom-right-radius: 0;
       dummy-bottom-left-radius: 5px;
   }
   ```

* `rtl-sass-declaration-value($property, $value)`

   Used to provide right-to-left support for declarations where the position *is* the value of the property - for example `text-align: left`.
   
   To add right-to-left support for the hypothetical CSS declaration `dummy: left`, this mixin would be called with the following form:
   
   `@include rtl-sass-declaration-value(dummy, left);`

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

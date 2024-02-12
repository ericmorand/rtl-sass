# Right-to-Left [![NPM version][npm-image]][npm-url]

**Right-to-left done right with Sass**

Right-to-left makes supporting right-to-left languages in Sass super simple. Use the provided mixins instead of their belonging CSS declarations and you're done!

## Provided mixins

### Alignment

* `text-align($value)`

### Border

* `bottom-left-radius($value)`
* `bottom-right-radius($value)`
* `color($top, $right: null, $bottom: null, $left: null)`
* `left($value)`
* `left-color($value)`
* `left-style($value)`
* `left-width($value)`
* `radius($topLeft, $topRight: null, $bottomRight: null, $bottomLeft: null)`
* `right($value)`
* `right-color($value)`
* `right-style($value)`
* `right-width($value)`
* `style($top, $right: null, $bottom: null, $left: null)`
* `top-left-radius($value)`
* `top-right-radius($value)`
* `width($top, $right: null, $bottom: null, $left: null)`

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

### API

### Functions

Right-to-left uses the following low-level functions to implement its right-to-left support.

* `extract-1-to-4-values($one, $two: null, $three: null, $four: null)`

  Returns a [Sass List](http://sass-lang.com/documentation/Sass/Script/Value/List.html) containing four values conforming to CSS specifications regarding the number of arguments of 1-to-4 declarations: if it is passed four values, they are returned as-it; if `$four` is missing, it is the same as `$two`; if `$three` is missing, it is the same as `$one`; if `$two` is missing, it is the same as `$one`.

### Mixins

Right-to-left uses the following low-level mixins to implement its right-to-left support. Feel free to use them to provide right-to-left support to declarations that are not (yet ^^) supported by rtl-sass.
      
* `declaration($property, $leftToRightValue, $rightToLeftValue)`

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
   
   `@include declaration(dummy-property, left-to-right-value, right-to-left-value);`
      
* `declaration-1-to-4($property, $top, $right: null, $bottom: null, $left: null)`

   Used to provide right-to-left support for *side-related* declarations using 1-to-4 value syntax - for example `margin: 20px 10px`. This mixin conforms to CSS specifications regarding the number of arguments: if it is passed four values, they set top, right, bottom and left in that order; if `$left` is missing, it is the same as `$right`; if `$bottom` is missing, it is the same as `$top`; if `$right` is missing, it is the same as `$top`.
   
   `$property` can be either a [Sass String](http://sass-lang.com/documentation/Sass/Script/Value/String.html) or a [Sass List](http://sass-lang.com/documentation/Sass/Script/Value/List.html). In the latter case, the first element of the list is considered as the property prefix and the second one (if any) as the property suffix. Any additional element of the list is ignored.
  
   To add right-to-left support for the hypothetical CSS declaration `dummy: 20px 10px 5px 0px`, this mixin would be called with one of the following forms:
   
   `@include declaration-1-to-4(dummy, 20px, 10px, 5px, 0px);`
   
   `@include declaration-1-to-4((dummy), 20px, 10px, 5px, 0px);`
   
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
      
   `@include declaration-1-to-4((dummy, width), 20px, 10px, 5px, 0px);`
   
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
 
* `declaration-1-to-4-corner($property, $topLeft, $topRight: null, $bottomRight: null, $bottomLeft: null)`

   Used to provide right-to-left support for *corner-related* declarations using 1-to-4 value syntax - for example `radius: 20px 10px`. This mixin conforms to CSS specifications regarding the number of arguments: if it is passed four values, they set top-left, top-right, bottom-right and bottom-left in that order; if `$bottomLeft` is omitted it is the same as `$topRight`; if `$bottomRight` is omitted it is the same as `$topLeft`; if `$topRight` is omitted it is the same as `$topLeft`.
   
   `$property` can be either a [Sass String](http://sass-lang.com/documentation/Sass/Script/Value/String.html) or a [Sass List](http://sass-lang.com/documentation/Sass/Script/Value/List.html). In the latter case, the first element of the list is considered as the property prefix and the second one (if any) as the property suffix. Any additional element of the list is ignored.
  
   To add right-to-left support for the hypothetical CSS declaration `dummy: 20px 10px 5px 0px`, this mixin would be called with one of the following forms:
   
   `@include declaration-1-to-4-corner(dummy, 20px, 10px, 5px, 0px);`
   
   `@include declaration-1-to-4-corner((dummy), 20px, 10px, 5px, 0px);`
   
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
      
   `@include declaration-1-to-4-corner((dummy, radius), 20px, 10px, 5px, 0px);`
   
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

* `declaration-value($property, $value)`

   Used to provide right-to-left support for declarations where the position *is* the value of the property - for example `text-align: left`.
   
   To add right-to-left support for the hypothetical CSS declaration `dummy: left`, this mixin would be called with the following form:
   
   `@include declaration-value(dummy, left);`

## How to use

First, install rtl-sass:

```shell
npm i rtl-sass
```

Then _use_ the module:
 
```scss
@use "{relative/path/to/node_modules}/rtl-sass" as Rtl;

.foo {
  Rtl.color(orangered);
}
```

You can also _use_ each module independently:

```scss
@use "{relative/path/to/node_modules}/rtl-sass/api" as Api;
@use "{relative/path/to/node_modules}/rtl-sass/border" as Border;

.foo {
  @include Api.declaration(float, left, right);
  @include Border.color(black);
}
```

## Contributing

* Fork the main repository
* Code
* Implement tests using [node-tap](https://github.com/tapjs/node-tap)
* Issue a pull request keeping in mind that all pull requests must reference an issue in the issue queue

## License

Apache-2.0 © [Eric MORAND](eric.morand@gmail.com)

[npm-image]: https://badge.fury.io/js/rtl-sass.svg
[npm-url]: https://npmjs.org/package/rtl-sass
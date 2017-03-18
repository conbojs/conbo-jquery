JQuery integration for ConboJS
==============================

ConboJS 4 no longer requires jQuery, but if you're upgrading a project that uses ConboJS 3 then this add-on is designed to make your life easier during the transition by re-implement the most common jQuery properties, methods and shortcuts found in the previous version.

The `conbo-jquery.js` library can be used as an AMD module, CommonJS or as a global, and once loaded will automatically add the following properties and methods to ConboJS:

* `conbo.$`
* `View.$(selector, deep)`
* `View.$el`
* `View.$body`
* `View.$content`

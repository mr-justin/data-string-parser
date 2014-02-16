

// UMD block
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
      define([], factory);
  } else if (typeof exports === 'object') {
      module.exports = factory();
  } else {
      root.parseDataString = factory();
  }
}(this, function () {
  var stripQuotesHelper = /^'|^"|'$|"$/g;

  function trim (str) {
    return str.replace(/^\s+|\s+$/g, '')
  }

  function stripSurroundingQuotes (str) {
    return str.replace(stripQuotesHelper, '');
  }

  /**
   * Converts strings of key-value pairs to shallow objects.
   * Automaticly handles single/double/no quotes and converts
   * numbers to numbers.
   *
   * @param   {String}  dataString  The string to convert.
   *
   * @return  {Object}              The resulting object.
   *
   * @example
   * parseDataString('foo: bar, bar: foo'); // {foo: 'bar', bar: 'foo'}
   * parseDataString('num: 1'); // {num: 1}
   * parseDataString('num: "1"') // {num: '1'}
   * parseDataString("'foo': 'bar'") // {foo: 'bar'}
   */
  return function (dataString) {
    var result = {},
        definitions = dataString.split(','),
        index = -1,
        length = definitions.length,
        key, value, parts, strippedValue, hasQuotes;

    try {
      while (++index < length) {
        parts = definitions[index].split(':');

        key = parts.shift();
        key = trim(key);
        key = stripSurroundingQuotes(key);

        // Chances are the string was split by more colons, so we might
        // need to join the parts together again.
        value = parts.join(':');

        value = trim(value);
        strippedValue = value.replace(stripQuotesHelper, '');
        hasQuotes = (strippedValue !== value);
        value = strippedValue;

        // Don't convert values surrounded by quotes.
        if (!hasQuotes) {

          // Convert true to true boolean
          if (value === 'true') {
            value = true;

          // Convert false to false boolean
          } else if (value === 'false') {
            value = false;

          // Convert numbers to numbers
          } else if ('' + +value !== 'NaN') {
            value = +value;
          }
        }

        result[key] = value;
      }
    } catch (e) {
      e.message = 'Unable to parse data string.';
      throw e;
    }

    return result;
  }
}));

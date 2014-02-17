# data-string-parser

Parses strings that looks like a series of key-value pairs separated with commas into shallow objects. It's handy for parsing data-attributes with multiple values. It handles definititions with or without double or single quotes, and it will automaticly
cast numbers to numbers and false/true to booleans, if they aren't surrounded by quotes.

More details in the [specifications generated from the test suite](SPECS.md).

## Usage

    parseDataString('foo: bar, num: 1, isTrue: true, href: http://myserver');
    // {foo: 'bar', num: 1, isTrue: true, href: 'http://myserver'}

## UMD

The parser is wrapped with an UMD wrapper (https://github.com/umdjs/umd), so you can use it together with an AMD loader like Require.js, with node's require or just by including it in your scripts.



var assert = require('assert');
var dataStringParser = require('../data-string-parser.js');

describe('data-string-parser', function () {
  it('handles keys surrounded in single quotes', function () {
    var input = "'foo': bar";
    var output = dataStringParser(input);

    assert.deepEqual(output, {foo: 'bar'});
  });

  it('handles keys surrounded in double quotes', function () {
    var input = '"foo": bar';
    var output = dataStringParser(input);

    assert.deepEqual(output, {foo: 'bar'});
  });

  it('handles keys without quotes', function () {
    var input = 'foo: bar';
    var output = dataStringParser(input);

    assert.deepEqual(output, {foo: 'bar'});
  });

  it('handles values surrounded in single quotes', function() {
    var input = "foo: 'bar'";
    var output = dataStringParser(input);

    assert.deepEqual(output, {foo: 'bar'});
  });

  it('handles values surrounded in double quotes', function() {
    var input = 'foo: "bar"';
    var output = dataStringParser(input);

    assert.deepEqual(output, {foo: 'bar'});
  });

  it('handles values without quotes', function() {
    var input = 'foo: bar';
    var output = dataStringParser(input);

    assert.deepEqual(output, {foo: 'bar'});
  });

  it('converts number values to numbers', function() {
    var input = 'num: 1';
    var output = dataStringParser(input);

    assert.deepEqual(output, {num: 1});
  });

  it('converts "true" values to true booleans', function() {
    var input = 'isTrue: true';
    var output = dataStringParser(input);

    assert.deepEqual(output, {isTrue: true});
  });

  it('converts "false" values to false booleans', function() {
    var input = 'isTrue: false';
    var output = dataStringParser(input);

    assert.deepEqual(output, {isTrue: false});
  });

  it ('does not convert values surrounded by quotes', function() {
    var input = 'false: "false", true: "true", num: "1"';
    var output = dataStringParser(input);

    assert.deepEqual(output, {true: 'true', false: 'false', num: '1'});
  });

  it('handles colons in values', function() {
    var input = 'href: http://myserver';
    var output = dataStringParser(input);

    assert.deepEqual(output, {href: 'http://myserver'});
  });

  it('handles multiple pairs', function() {
    var input = 'foo1: bar1, foo2: bar2';
    var output = dataStringParser(input);

    assert.deepEqual(output, {foo1: 'bar1', foo2: 'bar2'});
  });
});

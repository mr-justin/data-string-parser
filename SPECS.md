# TOC
   - [data-string-parser](#data-string-parser)
<a name=""></a>
 
<a name="data-string-parser"></a>
# data-string-parser
handles keys surrounded in single quotes.

```js
var input = "'foo': bar";
var output = dataStringParser(input);
assert.deepEqual(output, {foo: 'bar'});
```

handles keys surrounded in double quotes.

```js
var input = '"foo": bar';
var output = dataStringParser(input);
assert.deepEqual(output, {foo: 'bar'});
```

handles keys without quotes.

```js
var input = 'foo: bar';
var output = dataStringParser(input);
assert.deepEqual(output, {foo: 'bar'});
```

handles values surrounded in single quotes.

```js
var input = "foo: 'bar'";
var output = dataStringParser(input);
assert.deepEqual(output, {foo: 'bar'});
```

handles values surrounded in double quotes.

```js
var input = 'foo: "bar"';
var output = dataStringParser(input);
assert.deepEqual(output, {foo: 'bar'});
```

handles values without quotes.

```js
var input = 'foo: bar';
var output = dataStringParser(input);
assert.deepEqual(output, {foo: 'bar'});
```

converts number values to numbers.

```js
var input = 'num: 1';
var output = dataStringParser(input);
assert.deepEqual(output, {num: 1});
```

converts "true" values to true booleans.

```js
var input = 'isTrue: true';
var output = dataStringParser(input);
assert.deepEqual(output, {isTrue: true});
```

converts "false" values to false booleans.

```js
var input = 'isTrue: false';
var output = dataStringParser(input);
assert.deepEqual(output, {isTrue: false});
```

does not convert values surrounded by quotes.

```js
var input = 'false: "false", true: "true", num: "1"';
var output = dataStringParser(input);
assert.deepEqual(output, {true: 'true', false: 'false', num: '1'});
```

handles colons in values.

```js
var input = 'href: http://myserver';
var output = dataStringParser(input);
assert.deepEqual(output, {href: 'http://myserver'});
```

handles multiple pairs.

```js
var input = 'foo1: bar1, foo2: bar2';
var output = dataStringParser(input);
assert.deepEqual(output, {foo1: 'bar1', foo2: 'bar2'});
```


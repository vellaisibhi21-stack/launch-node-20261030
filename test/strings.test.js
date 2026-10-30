const test = require('node:test');
const assert = require('node:assert');
const { slugify, capitalize } = require('../src/strings');

test('slugify lowercases and dashes', () => {
  assert.strictEqual(slugify('Hello World'), 'hello-world');
});
test('slugify trims punctuation', () => {
  assert.strictEqual(slugify('  --Hi!! '), 'hi');
});
test('capitalize first letter', () => {
  assert.strictEqual(capitalize('lane'), 'Lane');
});

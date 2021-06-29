import getFunction from '../index.js';
import { strict as assert } from 'assert';

const get = getFunction();
assert.deepStrictEqual(get({ hello: 'world' }, 'hello'), 'world');
assert.deepStrictEqual(get({ hello: 'world' }, '', 'kitty'), 'kitty');
assert.deepStrictEqual(get({ hello: 'world' }, 'hello', 'kitty'), 'world');
console.log("All OK!!!");
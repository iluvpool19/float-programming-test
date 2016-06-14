'use strict';

const fpt = require( '../index.js' );
const test = require( 'tape' );

test( 'DEEPFINDER: exports deepFinder method', t => {
    t.ok( fpt.deepFinder, 'has deepFinder export' );
    t.equal( typeof fpt.deepFinder, 'function', 'deepFinder is a function' );
    t.end();
} );

test( 'DEEPFINDER: finds strings that start with a', t => {
    const input = [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], {
        foo: 'aardvark'
    }, 'allegory' ];
    const result = fpt.deepFinder( input, value => /^a/i.test( value ) );

    t.ok( result, 'generated a result' );
    t.deepEqual( result, [ 'ant', 'apple', 'aardvark', 'allegory' ], 'result is correct' );
    t.end();
} );

test( 'DEEPFINDER: finds strings in deeply nested array', t => {
  const input = [[[[[[[[[[[[['hello']]]]]]]]]]]]];
  const result = fpt.deepFinder( input, value => /^h/i.test( value ) );

  t.deepEqual( result, [ 'hello' ], 'result is correct' );
  t.end();
} );

test( 'DEEPFINDER: finds strings in deeply nested object', t => {
  const input = {
    foo: {
      bar: {
        baz: {
          a: 'apple'
        }
      },
      b: 'aardvark'
    }
  };
  const result = fpt.deepFinder( input, value => /^a/i.test( value ) );

  t.deepEqual( result, [ 'apple', 'aardvark' ], 'result is correct' );
  t.end();
} );

test( 'DEEPFINDER: generates array with single value', t => {
    const input = 'hello'
    const result = fpt.finder( input, value => /^h/i.test( value ) );

    t.deepEqual( result, ['hello'], 'result is correct' );
    t.end();
} );

test( 'DEEPFINDER: returns empty array when nothing passes test', t => {
    const input = 'hello'
    const result = fpt.finder( input, value => /^a/i.test( value ) );

    t.deepEqual( result, [], 'result is correct' );
    t.end();
} );

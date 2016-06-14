'use strict';

const fpt = require( '../index.js' );
const test = require( 'tape' );

test( 'FINDER: exports finder method', t => {
    t.ok( fpt.finder, 'has finder export' );
    t.equal( typeof fpt.finder, 'function', 'finder is a function' );
    t.end();
} );

test( 'FINDER: finds strings that start with a', t => {
    const input = [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], {
        foo: 'aardvark'
    }, 'allegory' ];
    const result = fpt.finder( input, value => /^a/i.test( value ) );

    t.ok( result, 'generated a result' );
    t.deepEqual( result, [ 'ant', 'allegory' ], 'result is correct' );
    t.end();
} );

test( 'FINDER: takes object as input', t => {
    const input = {
      a: 'apple',
      b: 'banana'
    };
    const result = fpt.finder( input, value => /^a/i.test( value ) );

    t.deepEqual( result, [ 'apple' ], 'result is correct')
    t.end();
} );

test( 'FINDER: generates array with single value', t => {
    const input = 'hello'
    const result = fpt.finder( input, value => /^h/i.test( value ) );

    t.deepEqual( result, ['hello'], 'result is correct' );
    t.end();
} );

test( 'FINDER: returns empty array when nothing passes test', t => {
    const input = 'hello'
    const result = fpt.finder( input, value => /^a/i.test( value ) );

    t.deepEqual( result, [], 'result is correct' );
    t.end();
} );

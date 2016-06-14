'use strict';

/*
 * finder
 * 
 * Takes an input and a test function and returns any values in
 * the input that pass the test.
 * 
 * Eg:
 * 
 *   input: [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], { foo: 'aardvark' }, 'allegory' ]
 *   test: value => /^a/i.test( value )
 *   returns: [ 'ant', 'allegory' ]
 * 
 */
module.exports = ( input, test ) => {
  // make sure input is array
  if (!Array.isArray(input)) return [];
  // define return value
  const retArr = [];
  // filter was working on personal tests, but not for the tape tests
  // also /^a/i.test(['apple', 'banana', 'carrot']) returns true
  // so i added the typeof flag in the callback of forEach
  input.forEach( val => {
    if ( test(val) && typeof val === 'string') {
      retArr.push(val)
    }
  });
  return retArr;
};

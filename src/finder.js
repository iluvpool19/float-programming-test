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
  // define return value
  const retArr = [];

  // make sure input is an object || array
  if (typeof input !== 'object') {
    return test(input) ? [input] : retArr;
  }
  // iterate object and find passing values
  Object.keys(input).forEach( val => {
    if ( test(input[val]) && typeof input[val] !== 'object') {
      retArr.push(input[val])
    }
  });
  return retArr;
};

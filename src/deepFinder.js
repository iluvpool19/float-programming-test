'use strict';

/*
 * deepFinder
 *
 * Takes an input and a test function and returns any values
 * in the input *recursively* that pass the test.
 *
 * Eg:
 *
 *   input: [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], { foo: 'aardvark' }, 'allegory' ]
 *   test: value => /^a/i.test( value )
 *   returns: [ 'ant', 'apple', 'aardvark', 'allegory' ]
 *
 */
module.exports = ( input, test ) => {
  // declare return value
  let retArr = [];

  // make sure input is object || array
  if (typeof input !== 'object') {
    return test(input) ? [input] : retArr;
  }

  Object.keys( input ).forEach( val => {
    if ( typeof input[val] === 'object') {
      retArr = retArr.concat( module.exports( input[val], test ));
    } else if ( test( input[val] ) ){
      retArr.push( input[val] );
    }
  })

  return retArr;
};

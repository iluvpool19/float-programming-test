'use strict';

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

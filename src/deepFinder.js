'use strict';

module.exports = ( input, test ) => {
  // make sure input is array
  if (!Array.isArray(input)) return [];

  // declare return value
  const retArr = [];

  // define recursive function
  function helper (restOfInput) {
    // base case for when array is empty
    if (!restOfInput.length) {
      return;
    }
    // check if current value is array so we can call the recursive function on it
    if (Array.isArray(restOfInput[0])) {
      return helper(restOfInput[0].concat(restOfInput.slice(1)));
    }
    // check if curr value is object
    if (typeof restOfInput[0] === 'object') {
      const arrOfObjVals = [];
      for (let key in restOfInput[0]) {
        arrOfObjVals.push(restOfInput[0][key]);
      }
      return helper(arrOfObjVals.concat(restOfInput.slice(1)));
    }
    // it passes the test push to return value
    if (test(restOfInput[0])) {
      retArr.push(restOfInput[0]);
    }
    return helper(restOfInput.slice(1));
  }
  // call recursive function on array and return the value
  helper(input);
  return retArr;
};

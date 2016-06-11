'use strict';

module.exports = ( length ) => {
  // make sure length is a number
  if (typeof length !== 'number') return [];
  // define return variable
  const retArr = [];
  // iterate the length amount of times
  for (let i = 0; i < length; i++) {
    if ((i + 1) % 15 === 0)
      retArr.push('fizzbuzz')
    else if ((i + 1) % 5 === 0)
      retArr.push('buzz')
    else if ((i + 1) % 3 === 0)
      retArr.push('fizz')
    else
      retArr.push(i+1);
  }
  return retArr;
};

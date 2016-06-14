'use strict';

/*
 * balancedParentheses
 * 
 * Takes an input string and returns true or false depending on if the string
 * has balanced parentheses.
 * 
 * Eg:
 * 
 *   input: '(x + y)'
 *   returns: true
 * 
 *   input: '(x + y'
 *   returns: false
 * 
 *   input: 'foo bar baz'
 *   returns: false
 * 
 *   input: ''
 *   returns: false
 */
module.exports = ( input ) => {
  // make sure input is a string
  if (typeof input !== 'string') return;
  // define counter variables for openning and closing parens
  let open = 0;
  let close = 0;
  // iterate through and count them up
  for(let i = 0; i < input.length; i++) {
    if (input[i] === '(')
      open++;
    if (input[i] === ')')
      close++;
  }
  // if there are the same amount of openning and closing parens it is balanced
  return open === close;
};

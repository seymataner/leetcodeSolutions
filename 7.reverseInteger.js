/*

Given a 32-bit signed integer, reverse digits of an integer.

Note:
Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0

*/


/**
 * @param {number} x
 * @return {number}
 */


var reverse = function(x) {
    
    var sign = x < 0;
    x = Math.abs(x);
    var reverseX = parseInt(String(x).split('').reverse((a,b) => a - b).join(''));
    return reverseX > 0x7FFFFFFF ? 0 : sign ? -reverseX : reverseX;
    
    
};
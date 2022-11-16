/***
 * 
 * String Periods
Have the function StringPeriods(str) take the str parameter being passed and determine if there is some substring K that can be repeated N > 1 times to produce the input string exactly as it appears. Your program should return the longest substring K, and if there is none it should return the string -1.

For example: if str is "abcababcababcab" then your program should return abcab because that is the longest substring that is repeated 3 times to create the final string. Another example: if str is "abababababab" then your program should return ababab because it is the longest substring. If the input string contains only a single character, your program should return the string -1.
Examples
Input: "abcxabc"
Output: -1
Input: "affedaaffed"
Output: -1
 * 
 */ 
let trackerIndex = 0;
let longestSubstring = '';
function StringPeriods(str) {

    // code goes here 

    const mid = (str.length / 2).toFixed();
     trackerIndex = Number(mid);	  
    findSubString(str); 

    return longestSubstring;

}
  
const findSubString = (str) => { 
    if (trackerIndex == 0) {
        longestSubstring = -1;
        return;
    } 
    ;
    const str1 = str.slice(0, trackerIndex); 
    const str2 = str.slice(str1.length, (str1.length *2)); 
    const checkForOddLength = str2.length % trackerIndex; 

  
    if (str1 === str2) {
        longestSubstring = str1;
       
        return ;
    }

    if (checkForOddLength > 0) {
    }
    trackerIndex -= 1;
    findSubString(str)
}
// keep this function call here 
console.log(StringPeriods("affedaaffed"));
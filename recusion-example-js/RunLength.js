/****
 * Run Length
Have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.
Examples
Input: "aabbcde"
Output: 2a2b1c1d1e
Input: "wwwbbbw"
Output: 3w3b1w
Tags
string manipulationencodingrecursion
 * 
 * 
 * 
 */
let enCodedStr = ''
function RunLength(str) {
  // code goes here
    encodeStr(str);
    return enCodedStr;
}

const encodeStr = (str) => {
    if (str == '') return; 
    const firstChar = str[0]; 
    const count = countChar(firstChar, str); 
    const remaining = extract(firstChar, str); 
    const encode = count + firstChar; 
    enCodedStr += encode; 
    encodeStr(remaining);
}

const countChar = (char, str) => {
    let count = 1; 
    
    for (let i = 1; i <= str.length; i++) {
        if (char == str[i] ) {
           count++
        } else {
            return count;
       }
    }
    return count;

}

const extract = (char, str) => {

    let count = 1;
    let index 
    for (let i = 1; i <= str.length; i++) {
        if (char == str[i]) {
            continue; 
        } else {
            return str.slice(i); 
        }
    }
}
// keep this function call here
console.log(RunLength("wwwbbbw"));
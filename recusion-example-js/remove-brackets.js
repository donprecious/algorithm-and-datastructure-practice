/**   
 * Have the function RemoveBrackets(str) take the str parameter being passed, which will contain only the characters "(" and ")", 
 * and determine the minimum number of brackets that need to be removed to create a string of correctly matched brackets.
 *  For example: if str is "(()))"
 * then your program should return the number 1. The answer could potentially be 0, and there will always be at least one set of matching brackets in the string
 * ** */

let unMatched = 0;
function RemoveBrackets(str) {

    const strArr = str.split(''); 
    // code goes here  
   
    findMatch(strArr);
    return unMatched;

} 
 /// this solution will correctly find match the match of this ))()) 
const findMatch = (strArr) => {
    
   
    if (strArr.length < 1) return ; 

    const initialBracket = strArr[0]; 
    const restPair = strArr.slice(1);   
    const correspondingBracket = getCorrespondinBracket(initialBracket);  
    const getMatchingBracketIndex = restPair.findIndex(a => a == correspondingBracket);   

    if (getMatchingBracketIndex < 0) { 
        unMatched += 1
    }
    const newPair = exclude(restPair, getMatchingBracketIndex);
    findMatch(newPair);
}

const getCorrespondinBracket =(str) =>{
    if (str == '(') {
        return ')'; 
    } else {
        return '('
  }
}

const exclude =(arr, index )=>{
    let newArr = [];  
    for (let i = 0; i < arr.length; i++) {
        if (i == index) continue; 
        newArr.push(arr[i])
    }
    return newArr;
}
// keep this function call here 
console.log(RemoveBrackets(")(()"));



//example 3 to solve with recusive approach 

const findMath2 = (arr) => { 
    if (arr.length < 0) return;
    const firstElement = arr[0];  
    gffffgg
    const hasSecondElement = arr[1] ? true : false; 
    has
}


//example 2  but wont work for input as )(( 
function RemoveBrackets2(str) {
    while (str.includes('()')) {
        str = str.replace('()', '');
    }
    return str.length;
}

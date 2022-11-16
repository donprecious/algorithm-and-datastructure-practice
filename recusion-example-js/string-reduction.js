/**
 * 
String Reduction
Have the function StringReduction(str) take the str parameter being passed and return the smallest number you can get through the following reduction method.
The method is: Only the letters a, b, and c will be given in str and you must take two different adjacent characters and replace it with the third. For example "ac" can be replaced with "b" but "aa" cannot be replaced with anything. This method is done repeatedly until the string cannot be further reduced, and the length of the resulting string is to be outputted.

For example: if str is "cab", then "ca" can be reduced to "b" and you get "bb" (you can also reduce it to "cc"). The reduction is done so the output should be 2. If str is "bcab", "bc" reduces to "a", so you have "aab", then "ab" reduces to "c", and the final string "ac" is reduced to "b" so the output should be 1.
 */
let reducedStrLen = '';

const reduce = (strArr) => {
    if (strArr.length == 1) {
        reducedStrLen = 1;
        return;
    };  
    const completed = hasCompleted(strArr); 
    if (completed) {
        
        reducedStrLen = strArr.length;
        return;
    }

    for (let i = 0; i <= strArr.length; i++) {
        const currentItem = strArr[i];
        const nextItem = strArr[i + 1];  
        if (!nextItem) return reducedStrLen = strArr.length;
        if (currentItem != nextItem) {
            const adjChar = getAdjacent(currentItem, nextItem); 
            const newItems = replaceArr(i, adjChar, strArr); 
            reduce(newItems);
        } else {
            continue; 
        } 
    
    }
}

const getAdjacent =(item1, item2) => {
    const items = ['a', 'b', 'c'];
    const result = items.filter(a => a != item1 && a != item2).join('');
    return result;
}

const replaceArr=(startIndex, newItem, arrItems)=>{
    arrItems.splice(startIndex, 2, newItem); 
    return arrItems; 
}

const hasCompleted = (items) => {
   return items.every(item => items[0] == item);
}

function StringReduction(str) {

    // code goes here  
    const strArr = str.split('');
    reduce(strArr);

    return reducedStrLen;

}

// keep this function call here 
console.log(StringReduction("aab"));
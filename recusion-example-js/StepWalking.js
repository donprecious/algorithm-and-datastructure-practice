function StepWalking(num) {

    // code goes here  
    return calculateSteps(num);

}

// const calculateSteps = (num) => {
//     if (num == 1) return 1; 
 
//     if (num == 2) return 2;

//     const result = (num - 3) * 2; 
//     const sum = 3 + result; 
//     return sum;
// }


const calculateSteps = (num) => {
    if (num == 1) return 1;

    if (num == 2) return 2;

    const result = calculateSteps(num - 1) + calculateSteps(num - 2);

    return result;
    //time complexity = o(2^n)
    //space complexity = o(n)
}

// keep this function call here 
console.log(StepWalking(5));
const memo = {};
const memoWalkThrough = (num, memo) => {
    if (memo[num]) return memo[num];

    if (num == 1) return 1;

    if (num == 2) return 2;

    memo[num] = memoWalkThrough(num - 1, memo) + memoWalkThrough(num - 2, memo);
    return memo[num];

    //time complexity = o(n)
    //space complexity = o(n)
}

// keep this function call here 
console.log(StepWalking(3));
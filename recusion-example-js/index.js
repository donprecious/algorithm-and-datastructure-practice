

const permutations = (elements) => {
    if (elements.length == 0) return [[]]; 

const firstElem = elements[0]; 

const rest = elements.slice(1); 
const permutationWithoutFirst = permutations(rest); 

const allPermutations = [];
    permutationWithoutFirst.forEach(perm => {
        for (let i = 0; i <= perm.length; i++) {
            const firstPart = perm.slice(0, i); 
            const lastPart = perm.slice(i); 
            firstPart.push(firstElem);
            const item  = firstPart.concat(lastPart);
            const permWithFirst = [...perm.slice(0, i), firstElem, ...perm.slice(i)]
            allPermutations.push(item);
    }

})
 console.log(allPermutations)
return allPermutations;
}

const item = ['a', 'b', 'c']; 

const result = permutations(item); 
console.log(result);
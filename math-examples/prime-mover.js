function PrimeMover(num) {

    // code goes here  
    
    return generatePrime(num); 


}

const generatePrime = (num) => {
    let primeNumber = 0;
    let primeCounter = 0
    for (let i = 1; i <= 10 ^ 4 ; i++){
            let flag = 0; 

            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = 1;
                    break;
                }
            }
            if (i > 1 && flag == 0) {
            
                primeCounter++; 
                if (primeCounter == num) {
                    primeNumber = i; 
                    break;
                }
            }
    }

    return primeNumber;
}
// keep this function call here 
console.log(PrimeMover(100000));
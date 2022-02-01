// TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

// ---> YOUR CODE HERE <---

// TEST
let numbers = [2, -4, 5, 3, 9, 0, 1];

function findMaxEven(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        if ((num % 2 == 0) && (num >= max)) {
            max = num; 
        } 
    } 
    return max;
} 

let max = findMaxEven(numbers);
console.log(`The max of ${numbers} is ${max}`); 
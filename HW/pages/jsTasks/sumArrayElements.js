// Sum array elements
// TASK: make sure to understand the example code and write the task given at the end of JS part.

// Example - sum all numbers in the interval [1..10]:
// var sum = 0;
// for ( var x = 1; x <= 10 ; x++ ){
// 	sum += x ;
// };
// console.log("sum = " + sum);

// TASK: given the array numbers, write the code which will print in console the sum of all positive even numbers in the array:
let numbers = [-2, 3, 7, 8, -1, 4, 2];
// >>>>>>>>> write your code bellow:

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    
    let arrayElement = numbers[i];
    if ((arrayElement % 2 === 0) && (arrayElement > 0)) {
        sum += i;
    }
}
console.log(Number(sum));

// expected output: 14
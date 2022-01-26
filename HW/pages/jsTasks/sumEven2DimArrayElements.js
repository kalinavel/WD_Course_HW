// TASK: Да се дефинира функция SumEven2DimArrayElements(), която връща сумата от четните елементи на подаденият й двумерен масив.

let arr = [
	[1,2,3],
	[4,5,6]
];

let sum = SumEven2DimArrayElements(arr);

// ---> YOUR CODE HERE <---

function SumEven2DimArrayElements(arr) {
    let sum;
    for (let i = 0; i < arr.length; i++) {
        let rows = arr[i];
        for (let j = 0; j < rows.length; j++) {
            let num = rows[j];
    
            if (num % 2 === 0) {
                sum += num;
            }
        }
    }
    return sum;
}

// TEST:
console.log(sum);

// expected output: 12

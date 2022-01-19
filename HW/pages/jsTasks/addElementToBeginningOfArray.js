// Add element to the beginning of array 
let arr = [1,2,3];

// arr[arr.length] = arr[arr.length - 1];
// arr[arr.length - 1] = arr[arr.length - 2];
// arr[arr.length - 2] = arr[arr.length - 3];
// arr[arr.length - 3] = arr[arr.length - 4];

// arr[0] = 9;
// console.log(arr);

// with for loop
for (let i = 0; i <= arr.length; i++) {
    arr[arr.length - i] = arr[arr.length - i - 1]; 
}

arr[0] = 9;
console.log(arr);
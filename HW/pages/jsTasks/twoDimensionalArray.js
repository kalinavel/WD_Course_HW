// Two dimensional array
// Task: look at the example and try to make the task given at the end of JS part.

var fruitsData = [
	["apple", "orange", "cherry"],
	[1.2, 2.0, 3.5],
];

// TASK: log in console each fruit and its price

// the non-efective (stupid) way:
// console.log( fruitsData[0][0] +'='+ fruitsData[1][0]);
// console.log( fruitsData[0][1] +'='+ fruitsData[1][1]);
// console.log( fruitsData[0][2] +'='+ fruitsData[1][2]);


// the clever way:
// >>>>>>>>>>>> your code here >>>>>>>>>>>>
//HINT: you have to loop over fruitsData "columns"

const fruitItems = fruitsData[0];
const fruitPrices = fruitsData[1];

for (let j = 0; j < fruitItems.length, j < fruitPrices.length; j++) {
	console.log(`${fruitItems[j]} = ${fruitPrices[j]}`);
}

// EXPECTED OUTPUT:
// apple = 1.2,
// orange = 2.0,
// cherry = 3.5
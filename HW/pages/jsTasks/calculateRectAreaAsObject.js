//TASK: да се дефинира функция calcRectangleArea(), която връща лицето на правоъгълник, 
// със зададени като пропъртита на обект дължина и ширина:

// ---> YOUR CODE HERE <---
function calcRectangleArea(obj) {
    let area = obj.width * obj.height;
    return area;
}
// TEST:
let rectangle = {
	width: 6,
	height: 3
};

let area = calcRectangleArea(rectangle);
console.log(`The area of rectangle is: ${area}`);

// expected result:
// The area of rectangle is: 18

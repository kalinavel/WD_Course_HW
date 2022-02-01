//TASK: 
//да се дефинира функция calcRectangleArea(), която връща лицето на правоъгълник, със зададени дължина и ширина:

// ---> YOUR CODE HERE <---

// !!! Do not change code bellow
// TEST:
let rectWidth = 6;
let rectHeight = 3;

function calcRectangleArea(rectWidth, rectHeight) {
    let area = rectWidth * rectHeight;
    return area;
}

let area = calcRectangleArea(rectWidth, rectHeight);
console.log(`The area of rectangle is: ${area}`);
// EXPECTED RESULT:
// The area of rectangle is: 18

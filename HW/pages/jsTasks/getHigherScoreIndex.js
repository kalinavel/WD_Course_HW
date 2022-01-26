let students = ["Ivan", "Pesho", "Maria"];
let scores = [5, 4, 6];

// TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.

// ---> YOUR CODE HERE <---
let highestScoreIndex = getHighestScoreIndex(scores);

function getHighestScoreIndex(scores) {
    let highestScore = scores[0];
    let highestScoreIndex;

    for (let i = 0; i < scores.length; i++) {
        const individualScore = scores[i];

        if (individualScore >= highestScore) {
            highestScore = individualScore;
            highestScoreIndex = i;
        }
    } 
    return highestScoreIndex;
}
// console.log(highestScoreIndex);

// TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:

// ---> YOUR CODE HERE <---
console.log(`${students[highestScoreIndex]} has the highest score: ${scores[highestScoreIndex]}`);

// expected output
// Maria has the higest score: 6



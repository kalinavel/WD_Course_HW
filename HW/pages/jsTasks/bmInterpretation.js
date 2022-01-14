// Интерпретация на показателите на ИТМ
// Напишете програма, която да изчислява Индекса на Телсната маса и според дадената таблица: 
"https://bg.wikipedia.org/wiki/Индекс_на_телесната_маса#Интерпретация_на_показателите_на_ИМТ"
// да изписва в конзолата съответното състояние на пациента.
// Използвайте подходящи имена на променливи!

let personHeight;
let personWeight;
personHeight = 1.7;
personWeight = 50;

let bodymassIndex = (personWeight / personHeight**2);
console.log(bodymassIndex);

if ((personWeight / personHeight**2) >= 18.5 && (personWeight / personHeight**2) <= 24.99 ) {
    console.log('You have normal weight.');
} else if ((personWeight / personHeight**2) >= 25 && (personWeight / personHeight**2) <= 29.99 ) {
    console.log('You are little overweight.');
} else if ((personWeight / personHeight**2) >= 30 ) {
    console.log('You need to be concerned. You are overweight.');
} else {
    console.log('You are below the normal weight.');
}
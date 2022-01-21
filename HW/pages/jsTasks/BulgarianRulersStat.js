// HW: Bulgarian Rulers Stat
// Даден е масив, който съдържа информация за български владетели, и периода на тяхното управление.
// Всеки елемент на масива е масив със следните данни:
// 	[<име>, <начална година на управление>, <крайна година на управление>]

var rulers = [
	["асПАРуХ",681, 700 ],
	["тЕРвеЛ", 700,718 ],
	["СеВаР", 738,753],
	["телЕРИГ", 766,777],
	["каРДАм", 777, 803],
	["крум", 803,814 ],
	["ОмурТАг",814,831],
];

// ЗАДАЧА: Изпишете в конзолата имената на онези български владетели, които са управлявали повече от 15 години.
// Разбира се, искаме да видим имената изписани според конвенциите за имена на съществителни-собствени: за целта може да използвате върху всяко име функцията toCamelCaseCyr(), която връща подадения й низ в скобите конвертиран до CamelCase
// Например:
	// console.log( toCamelCaseCyr('асПАРуХ') ); // Аспарух

// do not modify!
function toCamelCaseCyr(str) {
	return str.toLowerCase()
			    	.replace(/(?:\b|^|[^а-яА-Я])([а-яА-Я])/g, (all, chr) => chr.toUpperCase());
}
// >>>>>>>>>>НАЧАЛО НА ВАШИЯ КОД >>>>>>>>>>
let startDateRule;
let endDateRule;
let rulerOldest = [];
let ruleTime;
let rulerOldestTime = [];

for (let i = 0; i < rulers.length; i++) {
    let rulerName = rulers[i][0];

    startDateRule = rulers[i][1];
    endDateRule = rulers[i][2];
    ruleTime = endDateRule - startDateRule;
    
    if (ruleTime > 15) {
        rulerOldest.push(toCamelCaseCyr(rulerName));
        rulerOldestTime.push(ruleTime);
    }
}
console.log(`${rulerOldest[0]} е управлявал ${rulerOldestTime[0]} години.`);
console.log(`${rulerOldest[1]} е управлявал ${rulerOldestTime[1]} години.`);
console.log(`${rulerOldest[2]} е управлявал ${rulerOldestTime[2]} години.`);
console.log(`${rulerOldest[3]} е управлявал ${rulerOldestTime[3]} години.`);
console.log(`${rulerOldest[4]} е управлявал ${rulerOldestTime[4]} години.`);

// <<<<<<<<<< КРАЙ НА ВАШИЯ КОД <<<<<<<<<<<<<

// Очакван резултат,в конзолата:
// Аспарух е управлявал 19 години.
// Тервел е управлявал 18 години.
// Кардам е управлявал 26 години.
// Омуртаг е управлявал 17 години.


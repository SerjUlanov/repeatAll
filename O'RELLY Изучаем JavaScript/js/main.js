//Strings
//const dialod = "Sam looked up and said "don't do that" to Max"
// выражение выше приведёт к ошибке, необходимо использовать экранирование (\)
// Обратная косая черта (ОКЧ - \ ) - указывает, что строка не закончилась
const dialod = "Sam looked up and said \"don't do that\"to Max"
console.log(dialod);
// так же, через ОКЧ воспроизводятся специальные символы
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes

//Шаблонные строки(строковая интерполяция) - способ конкатенации строк
//Обозначается обратными апострофами (`...`), переменные выделяются в конструкцию ${var};
let Temp = 19.5
const message = `The current temperature is ${Temp}\u00b0C`
console.log(message);
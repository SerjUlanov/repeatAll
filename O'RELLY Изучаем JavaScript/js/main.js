//Strings (тип данных)
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

//Boolen (тип данных)
//Все булева значения вводятся без ковычек! Иначе это строка
console.log(true)
console.log(false)

//Symbol (тип данных)
//Символы - это уникальный идентификатор, используемый как ключ для свойств объектов.
//Символы позволяют создать объект, с абсолютно уникальными именами для свойств.
//https://nickbulljs.medium.com/%D0%B7%D0%B0%D1%87%D0%B5%D0%BC-%D0%BE%D0%BD%D0%B8-%D0%BD%D1%83%D0%B6%D0%BD%D1%8B-%D0%B2-javascript-symbol-iterator-generator-d5d186b4f1bd
let id1 = Symbol(); // создание нового символа;
console.log(id1)
//Только при создании символы можно дать описание (имя). Будет учитываться при дебагинге.
//Описание для символа, это просто метка, может повторятся, ни на что не влияет.
let id2 = Symbol("mySymbol");
let id3 = Symbol("mySymbol");
console.log(id2)
console.log(id2 == id3) // не строгое и строгое сравнение выдаст false
//Символы не могут быть неявно преобразованны в строку, как это умеет делать alert();
//только явное преобзарование методом .toString(), преобразует символ в строку
// alert(id2); - выдаст ошибку. Явно увидеть отсуствие преобразования можно в консоли console.log() методом typeof
console.log(typeof id2); //symbol
//Symbol() - это функция, но ключевое слово 'new'(создание объекта) не применимо.
//Можно добиться равинаста Symbol используя метод .for
let id4 = Symbol.for("mySymbol");
let id5 = Symbol.for("mySymbol");
console.log(id4 == id5) // вернет true
//метод .for не нарушает правила уникальности символов, для V8 это один и тот же символ
//позволяет получить доступ к символу из любого места в коде, заносятся в глобальный реестор
//но оба символа, должны быть объявлены через метод .for иначе они по прежнему не будут равны
let id6_1 = Symbol("mySymbol-1");
let id6_2 = Symbol.for("mySymbol-1");
console.log(id6_1 == id6_2) // false
//метод .keyFor позволяет получить имя символа созданного через метод .for
let id7 = Symbol.keyFor(id6_2)
console.log(id7); // вернет mySymbol-1
//если попытаться использовать метод .keyFor для символом созданных, без метода .for будет возвращено undefined
//Создадим объект person и с помощью символа добавим ему свойство.
//Создавать имя для свойства объекта, небходимо через метод .for, иначе оно не попадает в глобальный реестор, и его нельзя будет вызвать в дальнейшем
let person = {
   name: "Jack",
   age: 20,
   [Symbol.for('password')]: "Jack20",
   [Symbol.for('town')]: "Moscow",
   [Symbol('cash')]: "too mach", //не использованн метод .for
}
console.log(person);//выведет объект
console.log(person[Symbol.for("password")]);//вернет значение ключа(свойства)
//Что бы посмотреть все символы у объекта, необходимо использовать метод .getOwnPropertySymbols()
//в качестве агрумента, этот метод принимает инспектируемый объект
console.log(Object.getOwnPropertySymbols(person));//выведет имена символов(ключи) без значений.
//тип данных, возвращаемый этим методом - массив.
//данный метод не привередлив, и выводит символы созданные любым методом.

//Null и Undefined (тип данных)
//оба эти типы данных сообщают о том, что переменная объявлена, но не имеет значения.
//null - пусто ( считается, что для программеров )
//undefined - не определено ( считается, что для javaScript )
//когда переменная объявлена, но значение ей не присвоено, то её значение будет равно undefined

//Objects ( data type )
//в отличии от базовых типов, может представлять несколько значений, а так же изменять их в процессе существования.
const obj1 = {}; // создание пустого объекта.
//содержимое объекта (внутри {...}) - называют свойстами(или членами).
//в свою очаредь члены состоят их ключа(имени) и значения.
//ключом может быть строка, либо символ
//значение может быть любым типом данных
obj1.size;
obj1.color = "yellow";
console.log(obj1);
//объект может быть создан со свойставми с самого начала:
const sam1 = {
   name: "Sam",
   age: 4,
}
//объекты могут содержать другие объекты в качестве свойства:
const repa1 = {
   name: "Repa",
   classification: {
      kingdom: "Anamalia",
      class: "Mamalia",
      family: "Frlidae",
      species: "catus",
   }
}
//способы доступа к значениям
console.log(repa1.classification.family);
console.log(repa1["classification"].class);
console.log(repa1.classification['kingdom']);
console.log(repa1["classification"]['species']);
//так же, объекты могут содержать функции
repa1.speak = function () { return "Meow!"; };
//вызов такой функции
console.log(repa1.speak());
//оператор delate служит для удаления свойства из объекта:
console.log(repa1);//{name: 'Repa', classification: {…}, speak: ƒ}
delete repa1.classification;
console.log(repa1);//{name: 'Repa', speak: ƒ}

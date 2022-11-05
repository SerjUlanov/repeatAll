let n1 = 0;
while (true) {
   console.log(n1);
   n1 += 0.1
   if (n1 === 0.3) break;
   else if (n1 > 1) break;

}
console.log(`n1 Stopped at ${n1}`);

let n2 = 0;
while (true) {
   n2 += 0.1;
   if (Math.abs(n2 - 0.3) < Number.EPSILON) break
}
console.log(`n2 Stopped at ${n2}`);

//Истинные и ложные значения в JS
/*
Слудующие значения являются ложными (false)
   undefined
   null
   false
   0
   NaN
   ""(пустая строка)

Все отсальные - true.
-любой объект
-любой массив
-строки, содержащие только отступ (" ")
-строка "false"
*/

const x1 = true;
let x2 = 0;
const y1_2 = x1 || x2++;
console.log(y1_2);

const x3 = true;
let x4 = 0;
const y3_4 = x3 && x4++;
console.log(y3_4);

/* 
Деструктирирующее присвоение ( Destructuring assignment )
Позволяет взять объект или массив, и разбить(destructor) его на индивидуальные переменные
*/

//Объявление объекта
const obj_1 = {
   b: 2,
   c: 3,
   d: 4,
}
//Деструтирующее присвоение объекта
const { a, b, c } = obj_1;
console.log(a, b, c) // undefined 2 3
// a - вернет undefined,  потому что в объекте нет свойства с таким именем(ключом)
//свойству с ключом d, в объявлении не присвоили переменную, оно и не было присвоено

//еще вариант деструктуризации объекта
const obj_2 = {
   b1: 2,
   c1: 3,
   d1: 4,
}
let c1, d1;
({ c1, d1 } = obj_2)
console.log(c1, d1)

/*
При деструктуризации массива, мы можем назначить элементам массива любые имена
*/
const arr1 = [1, "fa", 82, true, "four", 5];

//деструктурирующее присвоение массива
let [x, y, z] = arr1;
console.log(x, y, z); //1 'fa' 82
//в этом примере 3 элементам из 4, массива arr1, были назначены переменные, и их значения ( элементов массива ) присвоились переменным.
//3,4,5 элементам массива, не были назначены переменные, так как они не был объявлены в 78 строке.
//Можно поместить остальные элменты в новый массив - оператором расширения ( spread operator )(...)
const arr2 = [1, "fa", 82, true, "four", 5];
let [x_arr2, y_arr2, ...arr_arr2] = arr2;
console.log(x_arr2, y_arr2, arr_arr2); //1 'fa' (4) [82, true, 'four', 5]

/*
Выражения в строковых шаблонах
При соединении строк, с помощью строковой интерполяции ( через обратные ковычки `...` ).
Есть возможность включать в строку строковой шаблон, это переменная, которая будет в составе строки.
*/
console.log(`Yanki go ${arr_arr2} home`) //Yanki go 82,true,four,5 home
// в строку выше, было включено содержимое переменной arr_arr2

/*
Оператор if...else можно преобразовать в условное выражения, для унификации кода
*/
// Стандартная конструкция if...else
if (5 > 1) {
   console.log("the first")
} else {
   console.log("the second")
}

// Тоже самое, через условное выражения
console.log(5 > 1 ? "the first" : "the second")  // the first

//так же есть возможность преобразования if в сокращённое логическое ИЛИ
/*
if(!options) options ={};
может быть преобразован в 
options = options || {};
*/
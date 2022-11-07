//Function
function testFunc() {
   const x = 5;
   const y = 10;
   console.log(x + y);
}
function hello() {
   console.log("Hello");
}

testFunc();
hello();
console.log("\t")
function testFunc_hello() {
   testFunc();
   hello();
   console.log("Выше, мы запустили две функции с помощью третьей(ЭТОЙ)")
}
testFunc_hello();
/*
main.js:5 15
main.js:8 Hello
main.js:17 Выше, мы запустили две функции с помощью третьей(ЭТОЙ)
*/
console.log("\t")

function insideFunc() {
   console.log("Внутри меня объявлена еще одна функция.");
   crazyInside();
   function crazyInside() {
      console.log("Я ОБъявлена ВНУТРИ!!!!");
   }
}
insideFunc();

console.log("\t")

function unixTime() {
   let time = Math.floor(new Date().getTime());
   console.log(time);
}
unixTime();

function randomInt() {
   const min = 100;
   const max = 300;
   let rand = Math.floor(min + Math.random() * (max + 1 - min));
   console.log(rand);
}
randomInt();
console.log(randomInt);

function randomInt() {
   console.log("Я фейковый случайный генератор");
}
randomInt();

console.log("\t")

let min = 100;
let max = 300;
function randFunc() {
   let rand = Math.floor(min + Math.random() * (max + 1 - min));
   console.log(rand);
}
randFunc();

min = 10;
max = 50;
randFunc();

function count_x_inside() {
   let xInside = 9;
   xInside++;
   console.log(xInside);
}
count_x_inside();
count_x_inside();

console.log("\t")

let xOutside = 9;
function count_x_outside() {
   xOutside++;
   console.log(xOutside);
}
count_x_outside();
count_x_outside();
count_x_outside();

document.querySelector(".out-1").addEventListener("mouseover", moveSquare);

let squeareWidth = 100;
function moveSquare() {
   squeareWidth++
   document.querySelector(".out-1").style.width = squeareWidth + "px";
}
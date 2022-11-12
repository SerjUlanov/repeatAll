function f1() {
   return 5
}

console.log(f1());
console.log(4 * f1());
console.log(f1() / f1() + f1());

function f2(a = 200, b = 100) {
   return a + b;
}
console.log(f2(2, 5) + f2(1, 1) * f2(7));

function f3(min, max) {
   let rend = min + Math.random() * (max + 1 - min);
   return Math.floor(rend);
}
console.log(f3(0, 255));

document.querySelector(".out-1").textContent = f1();
// alert(f1())
console.log(f1())

let cube1 = document.querySelector(".cube-1")
cube1.style.background = `rgb(${f3(0, 255)}, ${f3(0, 255)}, ${f3(0, 255)})`

//вывод данных введенных пользователем.
document.querySelector(".b-2").addEventListener('click',
   function () {
      const input = document.querySelector(".i-2").value;
      document.querySelector(".out-2").innerHTML = "Hi " + clearText(input);
      console.log("Hi " + clearText(input));
      console.log("Hi " + input);
   })
function clearText(data) {
   return data.trim().toLowerCase()
}

function t4() {
   console.log(1);
   return
   console.log(2);
}
t4()

function indexOfEmul(arr, num) {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) return `index = ${i}`;
   }
   return -1
}
console.log(indexOfEmul([22, 33, 44, 55], 33));
console.log(indexOfEmul([22, 33, 44, 55], 66));

//пользователь вводит возраст
document.querySelector(".b-3").addEventListener('click',
   function () {
      let year = +document.querySelector(".i-3").value;
      if (isNaN(year)) return;
      if (year <= 0 || year > 100) return
      document.querySelector(".out-3").innerHTML = 2022 - year;
   })

console.group("example 5")

const arr5 = [[3, 4, 5], [6, 7, 11]]
function t5() {
   let s = 0;
   for (let i = 0; i < arr5.length; i++) {
      s += sum(arr5[i]);
   }
   return s
}

function sum(arr) {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
   }
   return sum
}

console.log(t5());
console.groupEnd();

const arr7 = [[3, 4, 5], [5, 6, 2], [2, 1], [52, 14]];
const evenArr7 = arr7.filter(function (item) {
   return (sum(item) % 2 === 0);
});
console.log(evenArr7);

function t8() {
   return sum;
}
let s = t8();
console.log(s);
console.log(s([10, 20, 30]))
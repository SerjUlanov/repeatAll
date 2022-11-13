function sum(a, b) {
   return a + b;
};

document.querySelector(".b-1").addEventListener("click", function () {
   let res = sum(23, 45);
   console.log(res);
});

document.querySelector(".b-1").addEventListener("click", () => {
   let res = sum(23, 45);
   console.log(res);
});

//callback

const arr1 = [4, 5, 6, 7, 8];
console.log(arr1);

function pow1(a) {
   return a ** 2;
}
const res1 = arr1.map(pow1);
console.log(res1);

const arr2 = [4, 5, 6, 7, 8];
console.log(arr2);

const res2 = arr2.map((a) => {
   return a ** 2;
});
console.log(res2);

//если параметр(аргумент) один и строка тела тоже одна, то можно сократить до: 
const res3 = arr2.map(a => a ** 2);
console.log(res3);

//filter
//длинный вариант анонимный функции
const arr4 = [4, 5, 6, 7, 8];
const res4 = arr4.filter(function (item, index) {
   if (index % 2 === 0) {
      return true;
   }
})
console.log(res4);

//короткий вариант стрелочной
const arr5 = [4, 5, 6, 7, 8];
const res5 = arr5.filter((item, index) => index % 2 === 0)
console.log(res5);

//arrow & this
//вызов анонимной функции(classic) + this 
document.querySelector(".b-2").addEventListener("click", function () {
   console.log(this);
});

//вызов анонимной функции(arrow) + this 
//стрелочная функция не имеет собственного this поэтому берёт this из глобальной области.
document.querySelector(".b-2").addEventListener("click", () => {
   console.log(this);
});

//arrow & arguments
const t1 = function () {
   console.log(arguments)
   console.log("work")
};
t1(99, 100); // не выведется через arguments

const t2_1 = () => {
   // console.log(arguments)
   console.log("work")
};
t2_1(99, 100); // не выведется через arguments
const t2_2 = (...rest) => {
   console.log(rest)
   console.log("work")
};
t2_2(99, 100); //можно вывести через rest parametrs

function test(a, b) {
   console.log(arguments)
}
test(2, 7);
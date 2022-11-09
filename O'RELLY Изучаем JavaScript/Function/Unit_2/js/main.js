function f1(a, b) {
   console.log(a + b);
}
f1(5, 8);
f1(10, 20);
let z1 = 100;
f1(z1, 5);
f1(z1 * 2, 2);
f1(5, 8, 9, 10);
f1(7);

function f2(a = 0, b = 0) {
   console.log(a + b);
}
f2(7);

function f3(a, b, elem) {
   elem.textContent = a + b;
}
const out1 = document.querySelector(".out-1")
f3(5, 6, out1);

function f4(a, b, elem = ".out-2") {
   document.querySelector(elem).textContent = a + b;
}
f4(10, 5);

const out3 = document.querySelector(".out-3")

function f5(a, b, elem) {
   elem.textContent = a + b;
   console.log(arguments);
}

f5(10, 32, out3);

function f6() {
   console.log(arguments);
   let sum = 0;
   for (let i = 0; i < arguments.length; i++) sum += arguments[i];
   console.log(sum);
}

f6(4, 6, 7, 10);

function f7(...args) {
   console.log(args);
   let sum = args.reduce((accum, item) => accum += item);
   console.log(sum);
}

f7(62, 6, 7, 10);

const out4 = document.querySelector(".out-4")

function likeArgumFunc(num) {
   out4.innerHTML = `<b>${num}<b>`
}

function mainFunc(num, drowFunc) {
   drowFunc(num);
}
mainFunc(45, likeArgumFunc);

function f8(drowFunc, ...num) {
   drowFunc(num);
}
f8(likeArgumFunc, 88, 11, 91, 100, 299)
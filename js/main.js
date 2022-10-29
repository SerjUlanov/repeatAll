console.log("hi")
console.log(`hi`)
document.getElementById("test").innerHTML = "test_from_JS"
document.querySelector('p').textContent = 777;
let i1 = document.querySelector('.i-1')
let b1 = document.querySelector('.b-1')
let o1 = document.querySelector('.out-1')
b1.onclick = () => {
   console.log(1)
   console.log(+i1.value + 2);
   o1.innerHTML = i1.value;
   i1.value = '';
}

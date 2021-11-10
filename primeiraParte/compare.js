// == (comparação implíciata) compara apenas o valor

const num1 = 5;
const numString = "5";

console.log(num1 == numString)

// === (comparação explíciata) compara valor e tipo de dado

const num2 = 5;
const numString2 = "5";

console.log(typeof num2)
console.log(typeof numString2)
console.log(num2 === numString2)

console.log(num2 === Number(numString2))
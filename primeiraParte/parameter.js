// parâmetros de função

function soma(num1,num2) {
    return num1 + num2;
}

console.log(soma(-3,2))
console.log(soma(-2,3))


function nameAge(name, age) {
    return `meu nome é ${name} e minha idade é ${age}`;
}

console.log(nameAge("Renan", 18))


function multplica(num1, num2){
    return num1 * num2;
}

console.log(multplica(soma(4,6), soma(10,5)))
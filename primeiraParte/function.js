// let x = ""
// console.log(x)
// x = "oi"

// declaração de função
// function printText(text){

//     console.log(text);

// }

// printText(soma())
// printText("hello there")

// function soma(){
//     return 2 + 2;
// }

// console.log(soma())

// expressões de função

// const soma = function(num1, num2) {return num1 + num2}
// console.log(soma(1,1))


// Arrow Function
const arrowFunc = nome => `meu nome ${nome}`;
const soma = (num1, num2) => num1 + num2;

const soma2 = (num1, num2)=>{
    if(num1 || num2 > 10){
        return "somente 1 a 9"
    } else {
        return num1 + num2
    }
}

console.log()
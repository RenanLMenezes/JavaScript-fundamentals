//template strings
var isso = `quinze é ${10 + 5} e n ${2*10}`
console.log(isso)

//tagged template strings 

var a = 5
var b = 10

function tag(strings, ...values){
    console.log(strings[0])
    console.log(strings[1])
    console.log(values[0])
    console.log(values[1])

    return "bazinga!"
}

console.log(tag`Hello ${a + b} world ${a * b}`)

//Strings Raw

function tag2(strings, ...values){
    return strings.raw[0];
}

console.log(tag2`string text line1 \n string text line 2`)

console.log(String.raw`Hi \n${2+5}!`)
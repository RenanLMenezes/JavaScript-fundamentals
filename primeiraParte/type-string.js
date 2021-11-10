const text1 = "Hello World "
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies arcu quis odio tristique, nec vestibulum risus luctus. Praesent vel consectetur enim, ac interdum nibh. Fusce quis placerat diam. Fusce urna est, gravida sed convallis a, suscipit id massa. Praesent quis commodo magna. Morbi a odio consequat, imperdiet arcu eget, molestie purus. Proin pharetra, tellus eget rhoncus sodales, neque lectus consectetur metus, vitae maximus tortor dui in enim. Phasellus volutpat, nisi a pretium porta, mi magna consectetur libero, at facilisis felis felis et purus."
const numString = "2907356"
const citacao = 'renan disse "Olá"'

console.log(citacao);
//concatenação (+)

console.log(text1 + lorem)

//template strings
console.log(`quinze é ${10 + 5} e n ${2*10}`)

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
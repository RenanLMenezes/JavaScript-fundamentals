// const nums = [100,200,300,400,500,600]

// for(let i = 0; i < nums.length; i++){
//     console.log(i, nums[i])
// }

// const notas = [10, 6.5, 8, 7.5]

// let somaNotas = 0

// for(let i = 0; i < notas.length; i++){
//     somaNotas += notas[i]
//     console.log(i, somaNotas)
// }

// let media = somaNotas/notas.length
// console.log(media)

const notas = [10, 6.5, 8, 7.5]

let somaNotas = 0

notas.forEach( nota => {
    somaNotas  += nota
})

let media = somaNotas/notas.length
console.log(media)

// const cliente = {
//     nome: "Renan",
//     sobrenome: "Menezes",
//     idade: 18,
//     cpf: "111.111.111-11",
//     email: "meu@email.com"
// }

// cliente.parente = {
//     nome: "Meire",
//     parentesco: "Mãe",
//     dataNasc: "21/07/76"
// }

// console.log(cliente)

// cliente.parente.nome = "Meire Leme Menezes"

// console.log(cliente)

const cliente = {
    nome: "Renan",
    sobrenome: "Menezes",
    idade: 18,
    cpf: "111.111.111-11",
    email: "meu@email.com",
    parente: [{
        nome: "Meire",
        parentesco: "Mãe",
        dataNasc: "21/07/76"
    }]
}

cliente.parente.push({
    nome: "Genivaldo",
    parentesco: "Pai",
    dataNasc: "15/11/71"
})

console.log(cliente)

const cliente = {
    nome: "Renan",
    sobrenome: "Menezes",
    idade: 18,
    cpf: "111.111.111-11",
    email: "meu@email.com"
}

const keys = ["nome", "sobrenome","idade", "cpf", "email"]

//console.log(cliente[keys[0]])

keys.forEach(i => console.log(cliente[i]))
const cliente = {
    nome: "Renan",
    sobrenome: "Menezes",
    idade: 18,
    cpf: "111.111.111-11",
    email: "meu@email.com"
}

console.log(`Nome do cliente é ${cliente.nome} ${cliente.sobrenome} \n3 Primeiros digitos do CPF: ${cliente.cpf.substring(0,3)} \nIdade: ${cliente.idade}`)
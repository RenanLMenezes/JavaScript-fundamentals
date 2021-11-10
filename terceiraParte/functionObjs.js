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
    }],
    saldo: 100,
    depositar:function(valor){
        this.saldo += valor
    }
}
cliente.depositar(20)
console.log(cliente.saldo)
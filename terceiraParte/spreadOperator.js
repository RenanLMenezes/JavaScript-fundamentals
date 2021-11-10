const clientes = [
    {
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
        depositar: function (valor) {
            this.saldo += valor
        }
    },
    {
        nome: "Renan",
        sobrenome: "Menezes",
        idade: 18,
        cpf: "111.111.111-11",
        email: "meu@email.com",
        parente: [{
            nome: "Genivaldo",
            parentesco: "Pai",
            dataNasc: "15/11/71"
        }],
        saldo: 100,
        depositar: function (valor) {
            this.saldo += valor
        }
    }
]

const listaParentes = [...clientes[0].parente, ...clientes[1].parente]

console.table(listaParentes);
function obj(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = valor => {
        this.saldo += valor
    }
}

const renan = new obj("Renan", "123456789","renanlmenezes2003@gmail.com", 100)
const renan2 = new obj("Renan", "1","rmenezes2003@gmail.com", 100)

console.log(renan, renan2)
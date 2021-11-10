function obj(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = valor => {
        this.saldo += valor
    }
}

function clientePoupanca(nome,cpf,email,saldo,saldoPoup){
    obj.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const renan = new clientePoupanca("renan", "123312", "renan@gmail.com",100,200)
console.log(renan);

clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

renan.depositarPoup(100)
console.log(renan.saldoPoup);

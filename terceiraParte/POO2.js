class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf,
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    showSaldo(){
        console.log(this.saldo)
    }
}

class ClientePoup extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoup){
        super(nome,email,cpf,saldo)
        this.saldoPoup = saldoPoup
    }

    depositarPoup(valor){
        this.saldoPoup += valor
    }
}

const cliente1 = new ClientePoup("renan", "r@email.com", "123234343", 100, 100)

cliente1.depositarPoup(10)
console.log(cliente1)
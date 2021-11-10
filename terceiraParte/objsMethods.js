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



function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj)
    if(propsClientes.includes("parente")){
        console.log(`ola ${obj.nome}`);
    } else {
        console.log("nem tem")
    }
}

console.log(Object.entries(cliente));
console.log(Object.values(cliente));
oferecerSeguro(cliente)
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

let relatorio = "";

for (let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue
    } else {
        relatorio += `
        ${info} ==> ${cliente[info]}
        `    
    }
    
}

console.log(relatorio)
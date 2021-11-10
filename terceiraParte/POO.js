class Pessoal{
    constructor(nome,sobrenome,cpf,email){
        this.nome = nome    
        this.sobrenome = sobrenome
        this.cpf = cpf
        this.email = email
    }
    
    exibirNomeCompleto(){
        console.log(`${this.nome} ${this.sobrenome}`)
    }
}

class Programador extends Pessoal{
    constructor(nome,sobrenome,cpf,email,linguagem){
        super(nome,sobrenome,cpf,email)
        this.linguagem = linguagem
    }
}

const renan = new Programador("Renan", "Menezes", 2223322333, "email@email.com", "JS")
renan.exibirNomeCompleto()

class Bands{
    constructor(name, musicStyle, members=[]){
        this.name = name
        this.musicStyle = musicStyle
        this.members = members
    }
}

const Guns = new Bands("guns'n roses", "hard-rock", ["Axl Rose", "Slash", "Duff McKagan", "Steven Adler", "Melissa ReeseS"])

console.log(Guns)
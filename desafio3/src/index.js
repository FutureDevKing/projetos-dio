//criar um herói usando classes e objetos que possuam as seguintes propriedades
//nome === idade --- tipo (guerreiro, mago, monge, ninja, etc)
//além disso, deve ter um método "atacar" que atenda os seguintes requisitos:
//"o {tipo} atacou usando {ataque}" onde cada ataque possui um método diferente ex: "mago atacou usano magia" e "guerreiro atacou usano espada"

class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque;
        switch(this.tipo){
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                 break;
            default:
                ataque = "um ataque desconhecido";
        }
        let mensagem = `Ao encontrar seu primeiro inimigo, o ${this.tipo} atacou usando ${ataque}`
        console.log(`O herói ${this.nome} saiu em uma jornada aos ${this.idade} anos de idade`);
        console.log(mensagem)
    }
   
}

let heroiGuerreiro = new heroi("Arthur", 19, "guerreiro");
heroiGuerreiro.atacar();
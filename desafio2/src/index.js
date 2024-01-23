function calcularRanking(vitorias, derrotas) {
    let resultado = vitorias - derrotas;

    switch (true) {
        case vitorias >= 10 && vitorias <= 20:
            resultado = "Bronze";
            break;
            case vitorias >= 21 && vitorias <= 50:
            resultado = "Prata";
            break;
            case vitorias >= 51 && vitorias <= 80:
            resultado = "Ouro";
            break;
            case vitorias >= 81 && vitorias <= 90:
            resultado = "Diamante";
            break;
            case vitorias >= 91 && vitorias <= 100:
            resultado = "Lendário";
            break;
            case vitorias >= 101:
            resultado = "Imortal";
            break;
        default:
            resultado = "Ferro";
            break;
    }

    return resultado;
}

// Exemplo de uso da função:

let vitorias = 8;
let derrotas = 1
let resultadoRanking = calcularRanking(vitorias, derrotas);

console.log("O herói tem de saldo " + (vitorias - derrotas) + " e está no nível " + resultadoRanking);

let vitorias = Number(prompt('Digite o número de vitórias'));
let derrotas = Number(prompt('Digite o número de derrotas'));

function classifica (vitorias, derrotas){
    let saldo = vitorias - derrotas;
    
    if (vitorias <=  10) {
        let nivel = "Ferro";
    } else if(11<= vitorias <= 20){
        let nivel = "Bronze"
    } else if(21<= vitorias <= 50){
        let nivel = "Prata"
    } else if(51<= vitorias <= 80){
        let nivel = "Ouro"
    } else if(81<= vitorias <= 90){
        let nivel = "Diamante"
    } else if(91<= vitorias <= 100){
        let nivel = "Lendário"
    } else if(vitorias >= 101){
        let nivel = "Imortal"
    }

    return
}
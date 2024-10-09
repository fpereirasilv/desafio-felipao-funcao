let nomeHeroi = 'Flávio';
let saldoVitorias = 0;
let nivelHeroi = '';

function saldoRankeadas(nVitorias, nDerrotas){
    return nVitorias - nDerrotas;
} 

saldoVitorias = saldoRankeadas(55, 37);

function calculaRanke(ranke){
    if(ranke < 10) {
        return 'Ferro';
    } else if(ranke > 11 && ranke < 20){
        return 'Bronze';
    } else if(ranke > 21 && ranke < 50){
        return 'Prata';
    } else if(ranke > 51 && ranke < 80){
        return 'Ouro';
    } else if(ranke > 81 && ranke < 90){
        return 'Diamante';
    } else if(ranke > 91 && ranke < 100){
        return 'Lendário';
    } else if(ranke >= 101){
        return 'Imortal'
    }
}

nivelHeroi = calculaRanke(saldoVitorias)

function main(saldo, nivel){
    console.log(`O Herói tem de saldo de **${saldo}** está no nível de **${nivel}**`)
}

main(saldoVitorias, nivelHeroi);
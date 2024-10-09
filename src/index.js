let nomeHeroi = 'Flávio';
let xpHeroi = 300;
let classeHeroi = '';

if(xpHeroi <= 1000 ){
    classeHeroi = 'Ferro';
} else if(xpHeroi >= 1001 && xpHeroi < 2000 ){
    classeHeroi = 'Bronze';
} else if(xpHeroi >= 2001 && xpHeroi < 5000 ){
    classeHeroi = 'Prata';
} else if(xpHeroi >= 5001 && xpHeroi < 7000 ){
    classeHeroi = 'Ouro';
} else if(xpHeroi >= 7001 && xpHeroi < 8000 ){
    classeHeroi = 'Platina';
} else if(xpHeroi >= 8001 && xpHeroi < 9000 ){
    classeHeroi = 'Ascendente';
} else if(xpHeroi >= 9001 && xpHeroi < 10000 ){
    classeHeroi = 'Imortal'; 
} else if(xpHeroi >= 10001){
    classeHeroi = 'Radiante';
}

console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${classeHeroi}**`)
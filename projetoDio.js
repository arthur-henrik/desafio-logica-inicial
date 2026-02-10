let nomeHeroi = "Terroga";
let xpHeroi = 7500;
let tipoNivelHeroi = "Indefinido";

if (xpHeroi >= 0 && xpHeroi <= 1000) {
    tipoNivelHeroi = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    tipoNivelHeroi = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    tipoNivelHeroi = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    tipoNivelHeroi = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    tipoNivelHeroi = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    tipoNivelHeroi = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    tipoNivelHeroi = "Imortal";
} else if (xpHeroi >= 10001) {
    tipoNivelHeroi = "Radiante Imortal";
}

console.log("O herói de nome " + nomeHeroi + " está no nível " + tipoNivelHeroi);
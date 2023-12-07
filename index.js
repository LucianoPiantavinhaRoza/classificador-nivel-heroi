let nomeHeroi = "HYOGA";
let quantidadeExperiencia = 10001;

if (quantidadeExperiencia < 1000) {
    let nivel = "FERRO";
    console.log("O herói de nome " + nomeHeroi + " está no nível " + nivel + "!");
} else if (quantidadeExperiencia > 1000 && quantidadeExperiencia <= 2000) {
    let nivel = "BRONZE";
    console.log("O herói de nome " + nomeHeroi + " está no nível " + nivel + "!");
} else if (quantidadeExperiencia > 2000 && quantidadeExperiencia <= 5000) {
    let nivel = "PRATA";
    console.log("O herói de nome " + nomeHeroi + " está no nível " + nivel + "!");
} else if (quantidadeExperiencia > 6000 && quantidadeExperiencia <= 7000) {
    let nivel = "OURO";
    console.log("O herói de nome " + nomeHeroi + " está no nível " + nivel + "!");
} else if (quantidadeExperiencia > 7000 && quantidadeExperiencia <= 8000) {
    let nivel = "PLATINA";
    console.log("O herói de nome " + nomeHeroi + " está no nível " + nivel + "!");
} else if (quantidadeExperiencia > 8000 && quantidadeExperiencia <= 9000) {
    let nivel = "ASCENDENTE";
    console.log("O herói de nome " + nomeHeroi + " está no nível " + nivel + "!");
} else if (quantidadeExperiencia > 9000 && quantidadeExperiencia <= 10000) {
    let nivel = "IMORTAL";
    console.log("O herói de nome " + nomeHeroi + " está no nível " + nivel + "!");
} else if (quantidadeExperiencia > 10000) {
    let nivel = "RADIANTE";
    console.log("O herói de nome " + nomeHeroi + " está no nível " + nivel + "!");
};
function getRank(victories, defeats) {
    const winningBalance = victories - defeats;
    let level;

    if (victories < 10) {
        level = "Ferro";
    } else if (victories >= 11 && victories <= 20) {
        level = "Bronze";
    } else if (victories >= 21 && victories <= 50) {
        level = "Prata";
    } else if (victories >= 51 && victories <= 80) {
        level = "Ouro";
    } else if (victories >= 81 && victories <= 90) {
        level = "Diamante";
    } else if (victories >= 91 && victories <= 100) {
        level = "Lendário";
    } else {
        level = "Imortal";
    }

    return `O Herói tem um saldo de ${winningBalance} vitórias e está no nível de ${level}`;
}


let victories = 210;
let defeats = 50;
let result = getRank(victories, defeats);
console.log(result);
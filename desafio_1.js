let nome = '';
let XP = 2001;

if(XP < 1000) {
    nome = 'FERRO';
} else if(XP >= 1001 && XP < 2000) {
    nome = 'BRONZE'
} else {
    nome = 'RADIANTE';
}

console.log(`O Herói de nome ${nome} está no nível de ${XP}`);
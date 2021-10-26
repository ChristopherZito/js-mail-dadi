// Generare un numero random da 1 a 6,
// sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const win = document.getElementById("winner");
const numUs = document.getElementById("num-us");
const numPc = document.getElementById("numpc");

let diceUs = Math.floor(Math.random() * 6) +1;
let dicePc = Math.floor(Math.random() * 6) +1;

numUs.innerHTML = "il valore dell'utente è: " + diceUs;
numPc.innerHTML = "il valore del computer è: " + dicePc;

if(dicePc < diceUs){
    win.innerHTML = "il vincitore è l'utente";
}else if(dicePc === diceUs){
    win.innerHTML = "i dadi hanno lo stesso valore";
}else {
    win.innerHTML = "il vincitore è il PC";
}
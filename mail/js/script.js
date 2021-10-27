// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere (che hai fatto tu precedentemente),
// stampa un messaggio appropriato sull’esito del controllo.

const richiesta =document.getElementById("in");

// richiesta email
const usMail = prompt("Inserire un e-mail. Ex:nome.cognome@gmail.com");
console.log(usMail);
// lista email acconsentite
let mail =["christopher.zito@gmail.com", "manuel.zito@gmail.com","maicol.zito@gmail.com","pinco.zito@gmail.com","pallino.zito@gmail.com", "patrick.zito@gmail.com","sharon.zito@gmail.com"];
// confronto tra richiesta e lista
// accesso o rifiutato
let trov = false;
for(let i = 0; (i < mail.length) && (trov == false);i++ ){
    console.log("l'email da confrontare è: " + mail[i]);
    console.log("email registrate : " + mail.length);
    if (mail[i] == usMail){
        trov = true;
        richiesta.innerHTML = "benvenuto"
    }else {
        richiesta.innerHTML = "email non registrata"
    }
}; 


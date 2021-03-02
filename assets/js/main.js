// esercizio email
// creazione variabili necessarie
var listaEmail = ["pippo@gmail.com", "maatallawassim01@gmail.com", "pluto30@hotmail.it", "topolino@yahoo.com"];
var email = prompt("Inserisci la tua email:");
var condizione = false;

// creazione ciclo
for (var i = 0; i < listaEmail.length; i++) {
  if (email == listaEmail[i]){
    condizione = true;
  }
}

if (condizione){
  console.log("La tua email è nella lista");
} else {
  console.log("Mi dispiace la tua email non è nella lista");
}


// esercizio dadi
// creazione variabili per il tiro randomico dei dadi
var dadoMio = Math.floor(Math.random() * 6) + 1 ;
var dadoComputer = Math.floor(Math.random() * 6) + 1 ;
console.log("Il numero del tuo dado è: " + dadoMio);
console.log("Il numero del dado del computer è: " + dadoComputer);

// condizione per la gestione della vittoria
if (dadoMio > dadoComputer) {
  console.log("Complimenti hai battuto il computer");
} else if(dadoMio < dadoComputer){
  console.log("Mi dispiace questa volta hai perso");
} else {
  console.log("Wow è un pareggio");
}

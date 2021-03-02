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

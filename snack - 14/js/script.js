// ! Chiedi all'utente un numero di secondi da attendere e fai partire un timer da quel momento a zero secondi, interrompendo il timer


//chiediamo all'utente i secondi da attendere 
let userSeconds = Number.parseInt(prompt('quanti secondi vuoi attendere?'));


//creiamo una funzione dove ai secondi inseriti ne sottrae uno
const timer = setInterval(function() {
  userSeconds--;

  if (userSeconds <= 0) { //quando i secondi corrispondono a 0 
      clearInterval(timer);//interrompiamo l'intervallo
      alert('Il tempo è scaduto!');
  }
}, 1000);

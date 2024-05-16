// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.


function confrontaParole(parola1, parola2){   

    if (parola1.lenght==parola2.lenght){
      return (parola1, parola2);
    }else if (parola1.lenght>parola2.lenght){
      return (parola1);
    }else{
      return (parola2)
    }
}

let parola1 = prompt('inserisci la prima parola')
let parola2 = prompt('inserisci la seconda parola')

const parolaPiuLunga = confrontaParole(parola1,parola2)

if (parolaPiuLunga){
  console.log('la parola più lunga è' , parolaPiuLunga)
}




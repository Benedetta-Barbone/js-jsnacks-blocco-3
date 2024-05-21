//Scrivi una funzione che dato un numero inverta le sue cifre: 1234 -> 4321


function invertiCifre(number){
  const string = number.toString();
  let reversedString ='';
  
  for(let index = 0; index < string.lenght; index++){
    reversedString += string[index]
    } 
    
    return reversedString;
    
  }


  const userNumber = Number.parseInt(prompt('inserisci un numero'));

  console.log(invertiCifre(userNumber));
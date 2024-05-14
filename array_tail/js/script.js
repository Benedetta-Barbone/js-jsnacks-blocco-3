const codaArrey = new Array();
const numeroElementi = Number.parseInt(prompt ('quanti elementi vuoi inserire?'), 10);


for (index = 0; index<numeroElementi; index++){
    const numeriRandom = Math.floor(Math.random()*100 + 1);
    codaArrey.push(numeriRandom)    
}

console.log(codaArrey)



for (index=0; index<5; index++){
   const numeriRimossi = codaArrey.pop();
   console.log(numeriRimossi);
}





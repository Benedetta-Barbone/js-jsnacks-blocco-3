const codaArrey = new Array();
const numeroElementi = Number.parseInt(prompt ('quanti elementi vuoi inserire?'), 10);


for (index = 0; index<numeroElementi; index++){
    const numeriRandom = Math.floor(Math.random()*100 + 1);
    const codaArrey= [numeriRandom];
    console.log(codaArrey);
}




// Crea un array di oggetti che rappresentano delle persone, 10.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

const listaPersone = [
  {
    nome: 'Lucia',
    cognome: 'Rossi',
    età: 19,
  },
  {
    nome: 'Luca',
    cognome: 'Marino',
    età: 30,
  },
  {
    nome: 'Bendetta',
    cognome: 'Barbone',
    età: 21,
  },
  {
    nome: 'Katia',
    cognome: 'Cataldo',
    età: 14,
  },
  {
    nome: 'Ludovica',
    cognome: 'Picariello',
    età: 50,
  },
  {
    nome: 'Antonio',
    cognome: 'Russo',
    età: 12,
  },
  {
    nome: 'Vito',
    cognome: 'Dillaio',
    età: 62,
  },
  {
    nome: 'Andrea',
    cognome: 'Finelli',
    età: 10,
  },
  {
    nome: 'Michela',
    cognome: 'prizio',
    età: 22,
  },
  {
    nome: 'Michele',
    cognome: 'Cucciniello',
    età: 13,
  }
];

console.log(listaPersone);


listaPersone.forEach ((element, index)=>{
  const minori = [element.età];
  if (minori < 18){
    minori.push('non può guidare!');
  }
  console.log ('nome'+ element.nome, 'cognome'+ element.cognome, 'età'+ element.età, minori );
});


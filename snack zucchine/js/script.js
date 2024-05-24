
// Calcola quanto pesano tutte le zucchine.
// Dividi in due array separati le zucchine che misurano meno o più di 8cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const zucchine = [
  {
    varietà: 'nera',
    peso: 300,
    lunghezza: 10,
  },
  {
    varietà: 'nera',
    peso: 100,
    lunghezza: 8,
  },
  {
    varietà: 'nera',
    peso: 400,
    lunghezza: 13,
  },
  {
    varietà: 'nera',
    peso: 70,
    lunghezza: 8,
  },
  {
    varietà: 'nera',
    peso: 500,
    lunghezza: 16,
  },

  {
    varietà: 'nera',
    peso: 250,
    lunghezza: 9,
  },
  {
    varietà: 'nera',
    peso: 400,
    lunghezza: 12,
  },
  {
    varietà: 'nera',
    peso: 50,
    lunghezza: 6,
  },
  {
    varietà: 'nera',
    peso: 80,
    lunghezza: 5,
  }
];

const zucchineCorte = zucchine.filter(zucchina => zucchina.lunghezza <= 8);
const zucchineLunghe = zucchine.filter(zucchina => zucchina.lunghezza > 8);
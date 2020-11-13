// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere
var quantitaKm = prompt("Quanti Km devi percorrere?");
console.log(quantitaKm);


// Il programma dovrà chiedere l'età del passeggero.
var etaPasseggero = prompt("Quanti anni hai?");
console.log(etaPasseggero);


// Il programma dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
var costoDiUnKm = 0.21;
var prezzoIniziale = (costoDiUnKm * quantitaKm)
console.log(prezzoIniziale);

// va applicato uno sconto del 20% per i minorenni
if (etaPasseggero <= 17) {
  var scontoUnder = (20 * prezzoIniziale) / 100
  console.log(scontoUnder);
  var bigliettoScontatoUnder = (prezzoIniziale - scontoUnder)
  console.log(bigliettoScontatoUnder);
}

// va applicato uno sconto del 40% per gli over 65
else if (etaPasseggero >= 65) {
  var scontoOver = (40 * prezzoIniziale) / 100
  console.log(scontoOver);
  var bigliettoScontatoOver = (prezzoIniziale - scontoOver)
  console.log(bigliettoScontatoOver);
}

// nessuno sconto per passeggeri tra i 18 e 64 anni
else (etaPasseggero >= 18 || etaPasseggero <= 64)
  var bigliettoNoSconto = prezzoIniziale

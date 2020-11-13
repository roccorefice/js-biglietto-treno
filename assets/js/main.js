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
}
var scontoBigliettoUnder = (20 * prezzoIniziale) / 100
console.log(scontoBigliettoUnder);
var bigliettoScontatoUnder = (prezzoIniziale - scontoBigliettoUnder)
console.log(bigliettoScontatoUnder);




// va applicato uno sconto del 40% per gli over 65

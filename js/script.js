

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.


// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
// secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) 

// va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.


// L'output del prezzo finale va messo fuori in forma umana 
// (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.


// Chiedere all utente 
var chilometri = prompt('Quanti chilometri vuoi percorrere?');
var eta = prompt('Quanti anni hai?');

// Calcolo prezzo biglietto chilometri * 0.21
var prezzoBiglietto = chilometri * 0.21;

// Condizione che applica lo sconto in base all' eta del utente
if (eta < 18) {

    var sconto = prezzoBiglietto - prezzoBiglietto * 20 / 100;

} else if ( eta > 65) {

    var sconto = prezzoBiglietto - prezzoBiglietto * 40 / 100;

} else {
    
    var sconto = prezzoBiglietto;
    
}

// Arrotondare il risultato a un numero di 2 decimali per indicare i centesimi sul prezzo
// Il metodo toFixed() converte un numero in una stringa, arrotondando a un numero specificato di decimali.
var prezzo = sconto.toFixed(2)  + '€';


// stampare il risultato in un id sull' tag HTML tramite getElementById
document.getElementById('prezzo').innerHTML = 'Costo: ' + prezzo;

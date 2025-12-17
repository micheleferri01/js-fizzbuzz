// *js-fizzbuzz
// Richiesta
/*
 Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

// #Pseudo codice

// ##Raccolta dati
// Dichiaro da che numero desidero iniziare a contare
const startFrom = 1;
// Dichiaro fino a che numero desidero contare
const arriveTo = 100;
// Dichiaro il primo multiplo del quale desidero conoscere i numeri
const multipleNum1 = 3;
// Dichiaro il secondo multiplo del quale desidero conoscere i numeri
const multipleNum2 = 5;

// ##Elaborazione
// Creo ciclo per iniziare a contare
for (let i = startFrom; i < arriveTo; i++){

    // SE (il numero è multiplo di 3 AND multiplo di 5)
    // Scrivo nella console FizzBuzz al posto del numero
    // ALTRIMENTI SE (il numero è multiplo di 3)
    // Scrivo nella console Fizz al posto del numero
    // ALTRIMENTI SE (il numero è multiplo di 5)
    // Scrivo nella console Buzz al posto del numero
}

// ##Output
// Scrivo la lista dei numeri con le sostituzioni richieste
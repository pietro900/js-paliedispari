//gioco pari o dispari contro il pc: chiedere all'utente un numero tra 1 e 5 e generare un numero random tra 1 e 5. Chiedere all'utente se sceglie pari o dispari, quindi fare la somma dei due numeri (giocata utente + giocata pc), quindi valutare se il risultato è pari o dispari e comunicare all'utente se ha vinto o meno;

//chiedo all\'utente un numero tra 1 e 5;
var numero_utente = parseInt(prompt("inserisci un numro tra 1 e 5"))
console.log("numero utente: " + numero_utente);
//genero un numero random tra 1 e 5;
var numero_pc = Math.floor(Math.random() * 6) + 1;
console.log("numero pc: " + numero_pc);
//chiedo all\'utente se sceglie pari o dispari;
var pari_dispari = prompt("scegli tra pari e dispari")
console.log("scelte dell'utente: " + pari_dispari);
//sommo i due risultati;
var somma = numero_utente + numero_pc
console.log("somma dei numeri: " + somma);
//valuto se il risultato fa vincere l\'utente;

//individuo se la somma è pari o dispari;
//se dispari;
if (somma % 2 == 1) {
    var risultato = 'dispari';
    console.log("Il risultato è: dispari");
    //confronto con la scelta dell'utente;
    if (risultato = pari_dispari) {
        console.log("hai vinto");
    }else {
        console.log("hai vinto");
    }
}
//invece se è pari invece;
else {
    var risultato = 'pari';
    console.log("Il risultato è: pari");
    //confronto con la scelta dell'utente;
    if (risultato = pari_dispari) {
        console.log("hai vinto");
    }else {
        console.log("hai vinto");
    }
}

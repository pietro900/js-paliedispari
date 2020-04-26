//palindroma: scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato;

//chiedo una parola all'utente;
var parola = prompt("inserici una parola");
console.log("parola inserita dall\'utente: " + parola);

//analizzo la parola. come?...
//la divido facendola diventare un array;
var controllo = [];
var divisa = parola.split("")
console.log("parola divisa: " + divisa);
controllo.push(divisa);
console.log("caratteri inseriti nell'array: " + controllo);

//inverto gli elementi dell'array e la ricompongo. xk?
//se una parola è palindroma si puo leggere in entrambi i versi di lettura;
//quindi se gli inverto i carateri(propietà commutativa) il risultato non cambia;
divisa.reverse()
console.log("caratteri inversi: " + divisa);
var str = divisa.join("")
console.log("caratteri ricomposti: " + str);

//quindi se la parola ricomposta è uguale a quella iniziale...;
if (parola == str) {
    console.log("la parola " + parola + " è palindroma." );
}
else {
    console.log("la parola " + parola + " non è palindroma." );
}

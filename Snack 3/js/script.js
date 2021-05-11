//Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.


//funzione che seleziona gli elementi nell'array
function selectItemsArray(start,end, array){
    var elementiSelezionati=[]
    if( start > end){
        return alert("il primo numero deve essere più piccolo del secondo");
    }
    for (i=min; i<max; i++){
        elementiSelezionati.push(array[i]);
    }
    return elementiSelezionati;
}

//variabili
array =["a","b","c","d","e","e","f","g","h","i","l","m","n","o","p","q","r","s","t","u","v","z"];
min = 2;
max = 12;
//chiama la funzione che seleziona gli elementi nell'array
var nuovoArray = selectItemsArray(min,max,array);
console.log(nuovoArray);
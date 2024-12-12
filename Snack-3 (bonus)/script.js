// 1. Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// 2. La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

// FUNCTIONS

/**
 * To get array's elements from position indicate to position indicate (included)
 * 
 * @param {array} array array's name
 * @param {number} fromPosition real position, NOT array position - always < toPosition
 * @param {number} toPosition real position, NOT array position - always > fromPosition
 * @returns {array} array with elements from position indicate to position indicate (included)
 */

function getValueInArrayPosition(array, fromPosition, toPosition) {
    
    // check if values are correctly
    if (fromPosition > toPosition) {
        console.log("La posizione iniziale indicata è maggiore di quella finale. Riprova invertendo l'ordine")
    } else if (fromPosition < 1) {
        console.log("La posizione iniziale indicata è minore di 1. Riprova inserendo un valore maggiore o uguale a 1")
    } else if (toPosition > array.length) {
        console.log("La posizione finale indicata è maggiore del numero di elementi della lista. Riprova inserendo un valore minore o uguale al numero totale di elementi presenti")
    }

    // function logic
    let valueInArrayPosition = []
    for (let i = fromPosition - 1; i <= toPosition - 1; i++) {
        valueInArrayPosition.push(array[i])
    }
    return valueInArrayPosition
}

// VARIABLES (ARRAYS)

const alphabet = ["a", "b", "c", "d", "e", "f", "g"]
const numbers = [1, 2, 3, 4, 5, 6, 7]

// LOGIC

// print result
console.log(getValueInArrayPosition(alphabet, 3, 6))
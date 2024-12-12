// 1. Creare un array di oggetti di squadre di calcio.
// 2. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// 3. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// 4. Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// 5. Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// FUNCTIONS
/**
 * Generate a random number between a min and a max
 * 
 * @param {number} min - min number
 * @param {number} max - max number
 * @returns {number}
 */

function getRandomNumber(min, max) {
    let randomNumber = (Math.floor((Math.random()) * (max - min + 1) + min))
    return randomNumber
    }

// 1 - 2 - 3.

// OBJECT

const teams = [

    {
        nameTeam: "Fiorentina",
        goals: 0,
        foulsSuffered: 0
    },

    {
        nameTeam: "Juventus",
        goals: 0,
        foulsSuffered: 0
    },

    {
        nameTeam: "Milan",
        goals: 0,
        foulsSuffered: 0
    },
    
    {
        nameTeam: "Inter",
        goals: 0,
        foulsSuffered: 0
    },
    
    {
        nameTeam: "Roma",
        goals: 0,
        foulsSuffered: 0
    }

]

// teams list
console.log(teams)

// LOGIC 


// 1. Creare un array di oggetti:
// 2. Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// 3. Stampare a schermo la bici con peso minore.

// 1 - 2.

const bikes = [

    {
        brand: "Bianchi",
        weight: 17 //in kg
    },

    {
        brand: "Look",
        weight: 24 //in kg
    },

    {
        brand: "Willier Triestina",
        weight: 13 //in kg
    },
    
    {
        brand: "Pinarello",
        weight: 29 //in kg
    },
    
    {
        brand: "Colnago",
        weight: 22 //in kg
    }
]

// bikes list
console.log(bikes)

// 3. 

let minWeight = bikes[0]

for (let i = 0; i < bikes.length; i++) {
    if (bikes[i]["weight"] < minWeight["weight"]) {
        minWeight = bikes[i]
    } 
}

// bike with minor weight
console.log(minWeight)

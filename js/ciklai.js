/*const prekes = [
    {
        pavadinimas: "obuolys",
        kiekis: 10,
        kaina: 0.1
    },

    {
        pavadinimas: "kriause",
        kiekis: 4,
        kaina: 0.2 
    },

    {
        pavadinimas: "ananasas",
        kiekis: 5,
        kaina: 1
    }
] */
let saskaita = 0;
for(let i= 0; i<prekes.length; i++){
    const uzdarbis = prekes[i].kiekis * prekes[i].kaina;
    saskaita = saskaita + uzdarbis;
    console.log (i,saskaita);
}

const pazymiai = [10, 4, 6,7,2,8,3,4,6,1]
//suma
let suma = 0;
for(let i = 0; i<pazymiai.length; i++){
suma = suma+pazymiai[i]
   
}

const kiekis = pazymiai.length
const vidurkis = suma /kiekis
console.log (vidurkis);
//suma/kiekio





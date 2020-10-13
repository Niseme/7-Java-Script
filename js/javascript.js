// sarasas prekiu, jurios turi pavadinima, kaina ir kieki

// obuolys - 10vnt - 0.10eur
// kriause - 4vnt - 0.20eur
// ananasas - 5vnt - 1eur

const prekes = [
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
]

console.log(prekes);
const AntrosPrekesKaina = prekes[1].kaina
const AntrosPrekesKiekis = prekes[1]["kiekis"]
console.log(AntrosPrekesKiekis)
// console.log(AntrosPrekesKaina)
const PirmaPreke = prekes[0].kaina * prekes[0].kiekis
console.log(PirmaPreke)
const AntraPreke = prekes[1].kaina * prekes[1].kiekis
console.log(AntraPreke)
const TreciaPreke = prekes[2].kaina * prekes[2].kiekis
console.log(TreciaPreke)
const Uzdarbis = PirmaPreke+AntraPreke+TreciaPreke
console.log(Uzdarbis)
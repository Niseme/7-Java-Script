//Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
//Po kiekvieno jų inicijavimo, išvesti į console


const kintamieji = [
    a = 10,
    b = 20,
    c = 30
]
 console.log(a);

 const tekstas = [
     q='a',
     f='t',
     y='e'
 ]
 console.log(tekstas);

 const vertes = [
     a = 1,
     b = 2,
     c = 3,
     d = 4,
     e = 5

 ]
 console.log(a-b+c-d+e);

 //Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas - nesuprantu

 //Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.


 const skaiciai = [
     a=10,
     b=20
 ]

 if (a==b,a<b) {  
     console.log('pomidoras');
    } else {
        console.log('bandyk dar karta');
            }

//Išvesti teksto tipo kintamųjų ilgius

const ilgiai = [
    a = 'labas',
    b = 'labutis'
]

console.log(b.length);

//Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
if (a.length>=b.length) {  
    console.log('zodis a ilgesnis uz b');
   } else {
       console.log('zodis b ilgesnis uz a');
           }


//Išvesti sąrašo tipo kintamųjų ilgius

const sarasas = [
    45,
    45,
    56,
    45,
    88,
    5
]
console.log(sarasas.length);

// Ciklo for panaudojimas
//Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):


nuo = 15
iki = 66

let suma1 = 0
for (i = nuo; i <= iki; i++) 
{
suma1 = suma1 + i}
console.log(suma1);

//panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:

const zodis = [
    a='labas'
]
//console.log(a.charAt(1));

let reverse = 0 ;
for (let i=0; i<length; i++) {

reverse = reverse + a.charAt(i)}

console.log(a.charAt(i));

//Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
//0 - 11

const aa = -18;
const bb = 20;
const cc = 10;

let intervalas = 0;

for (let i = aa; i <= bb; i++ )
{
    if (i % cc === 0){
        intervalas++;
    }
}
console.log('intervale nuo',aa, 'iki', bb, 'besidalinanciu skaiciu is',cc, 'yra', intervalas);




/* let i = 10;
let j = i; // passage par valeur pour les types primitifs (string, boolean, number)

let bob = { 
  "name": "Bob",
  introduceMySelf: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
let raymond = bob;// passage par référence pour les types évolués
raymond.name = "Raymond";
raymond.introduceMySelf(); */

/* console.log(`toto`, toto);
let toto = "Toto"; */
/* function test(num) {
  for(let i = 0; i < num; i++ ) {
    console.log(`i : `, i);
  }
  console.log(`i`, i);
}
test(10); */
const toto = {
  name: "toto"
};
toto.name = "jiji";
console.log(`toto `, toto);
// Destructuring
const httpOptions = { timeout: 2000, isCache: true, list: [0, 1] };
/* const timeout = httpOptions.timeout;// Passage par valeur
const isCache = httpOptions.isCache;// Passage par valeur */

const { timeout, isCache, list: qsdf } = httpOptions;

console.log("timeout : ", timeout);
console.log("qsdf : ", qsdf);
//console.log("httpOptions : ", httpOptions);


// Destructuring de tableau
const fruits = ["banane", "cerise"];
const [b, c] = fruits;
console.log(`b`, b);

const people = [];
// ... rest operator
function addPeople(si, ...persons) {
  console.log(`si `, si);
  for (let person of persons) {
    people.push(person);
  }
}
addPeople('Simone', 'Germain', "Paulo");
console.log(people);

const peopleInRace = ["Arlette", "José", "Bran"];
const p = ["Claudine", ... peopleInRace, "Paulette"];
console.log("p : ", p);



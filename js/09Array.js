// Tableau littéral
const fruits = ["Banane", "Fraise"];

// instance de tableau
//const fruits = new Array("Banane", "Fraise");
// Le fait que fruits soit une instance de Array va lui permettre d'accéder à tout
// ce qui se trouve dans le prototype de Array

// exemples de méthodes utilisables depuis une instance de Array
console.log(fruits);
fruits.push("Cerise", "Tomate");
console.log(fruits);

// Parcours du tableau
for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// spread operator ...
const other_fruits = [ ...fruits, "Kiwi"];
console.log(`other_fruits`, other_fruits);

// Destructuring
const [banana, strawberry] = other_fruits;
console.log(`banana`, banana);



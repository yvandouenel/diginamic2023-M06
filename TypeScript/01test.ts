let test: string = "Hello World!"; // inférence : test est ici implicitement typé en chaîne de caractères
test = "121";

function testFunction(a: number): number {
  const b: string = "qsdf";
  return a;
}
testFunction(1);

const fruits: string[] = ["banane", "cerise"];

const point: [number, number] = [12.3, 54.23];
let contact: [string, number | string, boolean] = ["Bob", 12, true];

// Enumération
enum Color {
  white,
  blue,
  red,
}
let c: Color = Color.blue; // c est l'index de l'enumération
console.log(Color[c]);

// Quand on ne connaît pas le type à l’avance

let u: undefined | string = undefined;
if (typeof u == undefined) console.log(`u non définie`);

function test15h33(): never {
  console.log(`titi`);
  throw new Error("erreur ici");
}

// Interface
interface BikeInterface {
  brand: string;
  model: string;
  weight: number;
  run(speed: number): void;
}

/* const myBike: Bike = {
  brand: "Brompton",
  model: "BlackBerry",
  weight: 10,
  run: function (speed) {
    console.log(`run`);
  },
}; */
class Bike implements BikeInterface {
  brand: string;
  model: string;
  weight: number;
  constructor(brand: string, model: string, weight: number) {
    this.brand = brand;
    this.model = model;
    this.weight = weight;
  }
  run(speed: number) {
    console.log(`Je roule à ${speed} km/h`);
  }
}
const b1 = new Bike("Brompton", "Blackberry", 10);
b1.run(32);
console.log(`b1`, b1);

interface Greeter {
  msg: string;
}
// Alias de type
function getGreeting() {
  return "how do yo do?";
}

class Base {
  private _x = 12;
  get x() {
    console.log("dans le getter");
    return this._x;
  }
  set x(value: number) {
    console.log("dans le setter");
    this._x = value;
  }
}
const b = new Base();
b.x = 25;
console.log(b.x);

class Person {
  constructor(private lastname: string, private firstname: string) {
    // No body necessary
  }
  getLastname() {
    return this.lastname;
  }
  getFirstname() {
    return this.firstname;
  }
}
const p = new Person("Dylan", "Bob");
console.log(p.getLastname());
console.log(p.getFirstname());

let value: string | number = randomStringOrNumber();
function randomStringOrNumber() {
  if (Math.random() > 0.5) return 1.252555;
  else return "Hello World";
}
/* if (typeof value === "string") {
  // TypeScript knows that value is a string here
  console.log(value.toUpperCase()); // OK
} else {
  // TypeScript knows that value is a number here
  console.log(value.toFixed(2)); // OK
} */

if (typeof value === "string") console.log(value.toUpperCase());
else console.log(value.toFixed(2));

const x = "5" as number;

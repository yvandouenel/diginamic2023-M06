"use strict";
let test = "Hello World!"; // inférence : test est ici implicitement typé en chaîne de caractères
test = "121";
function testFunction(a) {
    const b = "qsdf";
    return a;
}
testFunction(1);
const fruits = ["banane", "cerise"];
const point = [12.3, 54.23];
let contact = ["Bob", 12, true];
// Enumération
var Color;
(function (Color) {
    Color[Color["white"] = 0] = "white";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["red"] = 2] = "red";
})(Color || (Color = {}));
let c = Color.blue; // c est l'index de l'enumération
console.log(Color[c]);
// Quand on ne connaît pas le type à l’avance
let u = undefined;
if (typeof u == undefined)
    console.log(`u non définie`);
function test15h33() {
    console.log(`titi`);
    throw new Error("erreur ici");
}
/* const myBike: Bike = {
  brand: "Brompton",
  model: "BlackBerry",
  weight: 10,
  run: function (speed) {
    console.log(`run`);
  },
}; */
class Bike {
    constructor(brand, model, weight) {
        this.brand = brand;
        this.model = model;
        this.weight = weight;
    }
    run(speed) {
        console.log(`Je roule à ${speed} km/h`);
    }
}
const b1 = new Bike("Brompton", "Blackberry", 10);
b1.run(32);
console.log(`b1`, b1);
// Alias de type
function getGreeting() {
    return "how do yo do?";
}
class Base {
    constructor() {
        this._x = 12;
    }
    get x() {
        console.log("dans le getter");
        return this._x;
    }
    set x(value) {
        console.log("dans le setter");
        this._x = value;
    }
}
const b = new Base();
b.x = 25;
console.log(b.x);
class Person {
    constructor(lastname, firstname) {
        this.lastname = lastname;
        this.firstname = firstname;
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





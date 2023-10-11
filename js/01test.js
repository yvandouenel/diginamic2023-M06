"use strict";
let i = 10;
let j = i; // passage par valeur pour les types primitifs (string, boolean, number)

let bob = { 
  "name": "Bob",
  introduceMySelf: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
let raymond = bob;// passage par référence pour les types évolués
raymond.name = "Raymond";
raymond.introduceMySelf();




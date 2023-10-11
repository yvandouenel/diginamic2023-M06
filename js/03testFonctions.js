"use strict";

/**
 * Affiche le paramètre name dans la console
 * @param {string} name 
 * @returns void
 */
function logLastname(name) { // définition de la fonction avec un paramètre
  console.log(name);

}
// test stocke le retour de la fonction appelée avec l'argument titi
const test = logLastname("titi");
//console.log(`test`, test);

let i = 1;
function a() {
  let j = 2;
  b();
  function b() {
    let l = 4;
    {
      let k = 3;
      console.log(`l`, l);
      console.log(k);
    }
    console.log(l);

  }
}
a();

"use strict";
import { createMarkup } from './../utils/utils.js';
try {
  //console.log(`i : `, i);
  console.log(add(1, 2));
} catch (error) {
  console.error(`Erreur attrapée`, error);
  createMarkup("h1", "le dev est un null, il aditionne des strings", document.body)
}

function add(a, b) {
  if (isNaN(a) || isNaN(b)) throw new Error("Attention, add doit être utilisée avec des nombres");
  return a + b;
}
/**
 * Construit des objets de type Card
 * @param {string} question 
 * @param {string} answer 
 * @returns object<Card>
 */
/* function Card(question, answer) {
  this.question = question;
  this.answer = answer;
  
}

Card.prototype.showAnswer = function() {
  console.log(`(propriété issue du prototype de Object)La réponse à la question : ${this.question} est : ${this.answer} `);
}
 */

// Class est du sucre syntaxique

/**
 * Construit des objets de type Card
 * @param {string} question 
 * @param {string} answer 
 * @returns object<Card>
 */
class Card {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
  showAnswer () {
    console.log(`(propriété issue du prototype de Card)La réponse à la question : ${this.question} est : ${this.answer} `);
  }
}
const card1 = new Card("Qui est l'inventeur du JS ?", "Brendan Eich");
card1.showAnswer();
console.log(`card1`, card1);

class Product {
  #price;
  constructor(name, price) {
    this.name = name;
    this.#price = price;
  }
  get price() {
    // Si marseillais, * 1.5
    console.log(`Dans le getter de price`);
    return this.#price;
  }
  set price(new_price) {
    console.log(`Dans le setter de price`);
    // Je vérifie si l'utilisateur a le droit de modifier
    this.#price = new_price;
  }
}
const bike = new Product("VTT", 1000);
console.log(bike.getPrice());
bike.price = 5;
console.log(bike.price);


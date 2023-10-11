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
Card.prototype.moveRight = function() {
  console.log(`Va dans la colonne de droite`);
} */

class Card {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
  moveRight() {
    console.log(`Va dans la colonne de droite`);
  }
  moveLeft() {
    console.log(`Va dans la colonne de gauche`);
  }
}
/**
 * 
 */
class CardWithExplanation extends Card{
  constructor(question, answer, explanation) {
    super(question, answer);
    this.explanation = explanation;
  }
  // Polymorphisme 
  moveLeft() {
    console.log(`Va dans la colonne de gauche, explication comprise.`);
  }
}

const card1 = new Card("Qui est l'inventeur du JS ?", "Brendan Eich");
console.log(`card1`, card1);

const cardWithExplanation1 = new CardWithExplanation("Qui inventé le web ?", "Tim Berners-Lee", "Cf wikipedia");
console.log(`cardWithExplanation1`, cardWithExplanation1);
card1.moveLeft();
cardWithExplanation1.moveLeft();










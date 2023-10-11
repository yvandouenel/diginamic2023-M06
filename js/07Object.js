/**
 * Construit des objets de type Card
 * @param {string} question 
 * @param {string} answer 
 * @returns object<Card>
 */
function Card(question, answer) {
  this.question = question;
  this.answer = answer;
}

const card1 = new Card("Qui est l'inventeur du JS ?", "Brendan Eich");
console.log(`card1`, card1);

Card.prototype.moveRight = function() {
  console.log(`Va dans la colonne de droite`);
}




// Récupération de la référence au bouton
const btn = document.querySelector("button");
btn.onclick = function(event) {
  console.log(`Bouton cliqué`);
} 


/* btn.addEventListener("click", () => {
  console.log(`Bouton cliqué`);
});
*/
btn.addEventListener("click", (event) => {
  console.log(`Bouton cliqué bis`);
});

const link = document.querySelector("a");
link.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(`lien cliqué`);
  console.log(`target`, event.target);
});
 

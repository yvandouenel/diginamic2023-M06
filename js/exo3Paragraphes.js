// Création d'un élément du dom (HTMLButtonElement exactement)
const button = createMarkup("button", "Ajouter un paragraphe", document.body);

// Création d'un élément du dom
const section = createMarkup("section", "", document.body);


// Gestion du click
button.addEventListener("click", () => {
  const p = createMarkup("p", "Lorem Ipsum", section)
})
/**
 * 
 * @param {string} elt 
 * @param {string} text 
 * @param {HTMLElement} parent 
 */
function createMarkup(markupName, text, parent) {
  const elt = document.createElement(markupName);
  elt.innerText = text;
  parent.appendChild(elt);

  return elt;
}




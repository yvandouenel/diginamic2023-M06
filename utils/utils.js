/**
 * 
 * @param {string} elt 
 * @param {string} text 
 * @param {HTMLElement} parent 
 */
export function createMarkup(markupName, text, parent) {
  const elt = document.createElement(markupName);
  elt.innerText = text;
  parent.appendChild(elt);

  return elt;
}
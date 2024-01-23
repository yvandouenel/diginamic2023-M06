/**
 * Crée un élément du dom, lui ajoute du texte, le place comme dernier
 * enfant de parent et ajoute un attribut en utilisant le paramètre attributes
 * @param {String} markup_name
 * @param {String} text
 * @param {domElement} parent
 * @param {Object} attributes
 * @returns domElement
 */
export function createMarkup(
  markupname: string,
  text: string,
  parent: HTMLElement,
  attributes: Record<string, string> = {}
): HTMLElement {
  const markup: HTMLElement = document.createElement(markupname);
  markup.textContent = text;
  parent.appendChild(markup);
  for (let key in attributes) {
    markup.setAttribute(key, attributes[key]);
  }

  return markup;
}

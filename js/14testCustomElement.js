class DigiCardComponent extends HTMLElement {
  constructor() {
    super();
    const template = document.querySelector('#card-template');
    const clonedTemplate = document.importNode(template.content, true);
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(clonedTemplate);

    console.log(`Dans le constructeur de la carte`);
  }
  /**
   * Appelé quand le composant est inséré
   */
  connectedCallback() {
    /* this.innerHTML = `<h2>Inventeur du web ?</h2>`
    this.innerHTML = `<ol><li>test 1</li><li>test 2</li></ol>` */
  }
}
customElements.define('digi-card', DigiCardComponent);
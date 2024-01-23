import { createMarkup } from "./utils/utils";
// création des éléments du dom
const form: HTMLFormElement = createMarkup("form", "", document.body) as HTMLFormElement;

const inputEuro: HTMLInputElement = createMarkup("input", "", form, {
  type: "text",
  id: "euro",
}) as HTMLInputElement;


const labelEuro: HTMLElement = document.createElement("label");
labelEuro.setAttribute("for", "euro");
labelEuro.innerText = "euros";
form.appendChild(labelEuro);

const inputChf: HTMLInputElement = document.createElement("input");
inputEuro.setAttribute("type", "text");
form.appendChild(inputChf);

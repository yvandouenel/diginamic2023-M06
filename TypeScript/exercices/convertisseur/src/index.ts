import { createMarkup } from "./utils/utils";
import "bootstrap/dist/css/bootstrap.css";

// création des éléments du dom
const form: HTMLFormElement = createMarkup("form", "", document.body, {
  class: "container",
}) as HTMLFormElement;

// Ici on utilise une assertion pour dire à TS que l'on sait que l'on récupère un input
// c'est qui va nous permettre de récupérer la value de l'input
const inputEuro: HTMLInputElement = createMarkup("input", "", form, {
  type: "number",
  id: "euro",
}) as HTMLInputElement;

inputEuro.addEventListener("input", (e: Event) => {
  // Comment typer value de manière à imposer un nombre ?
  const value: number = parseFloat(inputEuro.value);
  console.log(`Input Euro :`, value);

  // Il faut maintenant modifier la value de l'inputChf en fonction du taux de conversion (1.06) et de value
  inputChf.value = (value / 1.06).toFixed(2);
});

const labelEuro: HTMLElement = createMarkup("label", "euros", form, {
  for: "euro",
});

const inputChf: HTMLInputElement = createMarkup("input", "euros", form, {
  type: "text",
}) as HTMLInputElement;

inputChf.addEventListener("input", (e: Event) => {
  // Comment typer value de manière à imposer un nombre ?
  const value: number = parseFloat(inputChf.value);
  console.log(`Input Chf :`, value);

  // Il faut maintenant modifier la value de l'inputChf en fonction du taux de conversion (1.06) et de value
  inputEuro.value = (value * 1.06).toFixed(2);
});

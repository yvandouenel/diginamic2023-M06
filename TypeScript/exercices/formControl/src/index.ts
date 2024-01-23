import "bootstrap/dist/css/bootstrap.css";
import { createMarkup } from "./utils/utils";

const root: HTMLElement = document.getElementById("root");

// Création des éléments du DOM
const form = createMarkup("form", "", root, { class: "bg-light p-5" });

const sectionEmail = createMarkup("section", "", form, {
  class: "d-flex gap-3",
});

// Premier email
const divFormgroup1 = createMarkup("div", "", sectionEmail, {
  class: "form-group d-flex flex-column w-50",
});
const labelEmail1 = createMarkup("label", "Email :", divFormgroup1, {
  for: "email1",
});
const inputEmail1: HTMLInputElement = createMarkup("input", "", divFormgroup1, {
  type: "email",
  id: "email1",
}) as HTMLInputElement;
const legendEmail1 = createMarkup(
  "small",
  "Votre email vous servira d'identifiant",
  divFormgroup1,
  {}
);

// Deuxième email
const divFormgroup2 = createMarkup("div", "", sectionEmail, {
  class: "form-group d-flex flex-column w-50",
});
const labelEmail2 = createMarkup(
  "label",
  "Confirmation de l'email :",
  divFormgroup2,
  {
    for: "email2",
  }
);
const inputEmail2: HTMLInputElement = createMarkup("input", "", divFormgroup2, {
  type: "email",
  id: "email2",
}) as HTMLInputElement;
const legendEmail2 = createMarkup("small", "", divFormgroup2, {});

// Mots de passe ########################################################################
const sectionPwd = createMarkup("section", "", form, {
  class: "d-flex gap-3",
});

// Premier mdp
const divFormgroup3 = createMarkup("div", "", sectionPwd, {
  class: "form-group d-flex flex-column w-50",
});
const labelPwd1 = createMarkup("label", "Mot de passe :", divFormgroup3, {
  for: "pwd1",
});
const inputPwd1: HTMLInputElement = createMarkup("input", "", divFormgroup3, {
  type: "password",
  id: "pwd1",
}) as HTMLInputElement;
const legendPwdl1 = createMarkup("small", "", divFormgroup3, {});

// Deuxième mdp
const divFormgroup4 = createMarkup("div", "", sectionPwd, {
  class: "form-group d-flex flex-column w-50",
});
const labelPwd2 = createMarkup(
  "label",
  "Confirmation du mot de passe :",
  divFormgroup4,
  {
    for: "pwd2",
  }
);
const inputPwd2: HTMLInputElement = createMarkup("input", "", divFormgroup4, {
  type: "password",
  id: "pwd2",
}) as HTMLInputElement;
const legendPwd2 = createMarkup("small", "", divFormgroup4, {});
const legendPwd2Bis = createMarkup("small", "", divFormgroup4, {});
// Bouton de validation du formulaire
const buttonValidate = createMarkup("button", "Envoyer", form, {
  class: "btn btn-warning mt-4",
});

// Gestion des événements   #####################################################################
form.addEventListener("submit", (event: Event) => {
  event.preventDefault();
});

// Email
inputEmail1.addEventListener("input", (event: Event) => {
  if (inputEmail1.value === inputEmail2.value) {
    legendEmail2.innerHTML = `<span class="text-success">Les emails sont identiques</span>`;
  } else {
    legendEmail2.innerHTML = `<span class="text-warning">Les emails ne sont pas identiques</span>`;
  }
});
inputEmail2.addEventListener("input", (event: Event) => {
  if (inputEmail1.value === inputEmail2.value) {
    legendEmail2.innerHTML = `<span class="text-success">Les emails sont identiques</span>`;
  } else {
    legendEmail2.innerHTML = `<span class="text-warning">Les emails ne sont pas identiques</span>`;
  }
});

// Password
inputPwd1.addEventListener("input", (event: Event) => {
  checkPwd();
});
inputPwd2.addEventListener("input", (event: Event) => {
  checkPwd();
});

function checkPwd() {
  if (inputPwd1.value === inputPwd2.value) {
    legendPwd2.innerHTML = `<span class="text-success">Les mots de passe sont identiques</span>`;
  } else {
    legendPwd2.innerHTML = `<span class="text-warning">Les mots de passe ne sont pas identiques</span>`;
  }
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;
  if (regex.test(inputPwd1.value)) {
    console.log("mot de passe ok");
    legendPwd2Bis.innerHTML = `<span class="text-success">Votre mot de passe est valide</span>`;
  } else {
    let errorMsg = "";
    let lowerCaseRegex = /^(?=.*[a-z])/;
    let upperCaseRegex = /^(?=.*[A-Z])/;
    let digitRegex = /^(?=.*\d)/;
    let specialCharRegex = /^(?=.*[^A-Za-z0-9])/;
    let lengthRegex = /^.{6,}$/;

    if (!lowerCaseRegex.test(inputPwd1.value)) {
      errorMsg += `<li class="txt-warning">Votre mot de passe doit contenir au moins une minuscule</li>`;
    }
    if (!upperCaseRegex.test(inputPwd1.value)) {
      errorMsg += `<li class="txt-warning">Votre mot de passe doit contenir au moins une MAJUSCULE</li>`;
    }
    if (!digitRegex.test(inputPwd1.value)) {
      errorMsg += `<li class="txt-warning">Votre mot de passe doit contenir au moins un chiffre</li>`;
    }
    if (!specialCharRegex.test(inputPwd1.value)) {
      errorMsg += `<li class="txt-warning">Votre mot de passe doit contenir au moins un caractère spécial</li>`;
    }
    if (!lengthRegex.test(inputPwd1.value)) {
      errorMsg += `<li class="txt-warning">Votre mot de passe doit contenir au moins 6 caractères</li>`;
    }
    legendPwd2Bis.innerHTML = `<ul class="text-warning">${errorMsg}</ul>`;
  }
}

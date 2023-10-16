console.log(`dans exoModal`);
const button = document.querySelector("button");

const modal = document.querySelector("#my-modal");
// Cacher la modale par défaut
console.log(modal);
modal.hidden = true;
console.log(modal.hidden);
// Gestion des événements
button.addEventListener("click", () => {
  modal.hidden = !modal.hidden;
});
modal.addEventListener("click", (event) => {
  console.log(`event.target`, event.target);
  // Si la target est la section alors je la cache
  if(event.target === modal) {
    modal.hidden = true;
  }
})
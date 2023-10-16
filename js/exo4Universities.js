const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const country = document.getElementById("country").value;
  console.log(`country`, country);
  loadUniversities(country);
});

function loadUniversities(country) {
  return fetch(`http://universities.hipolabs.com/search?country=${country}`)
  .then(response => {
    return response.json();
  })
  .then(univs => {
    console.log(`univs`, univs);
  })
  .catch(error => {
    console.error("Erreur attrapée dans loadUniversities");
  })
}
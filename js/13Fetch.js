/* fetch("http://universities.hipolabs.com/search?country=France")
  .then((response) => {
    console.log(`response.status`, response.status);

    return response.json();
  })
  .then(data => {
    //throw new Error("J'ai la data, mais je ne suis pas content");
    console.log(`data`, data);
  })
  .catch(error => {
    console.log(`erreur attrapée dans le fetch`, error);
  }); */

async function getUniversities() {
  try {
    const response = await fetch("http://universities.hipolabs.com/search?country=France");
    const data = await response.json();
    console.log(`data : `, data);
  } catch (error) {
    console.log(`erreur attrapée dans le fetch avec asyn et await`, error);
  }
}
getUniversities();
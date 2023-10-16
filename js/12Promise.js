function getWeather() {
  return new Promise((resolve, reject) => {
    // asynchrone 
    setTimeout(() => {
      // aléatoire
      if (Math.random() > 0.1) {
        // cas favorable
        resolve("Il fait beau");
      } else {
        // cas défavorable
        reject("Il ne fait pas beau");
      }
    }, 2000);
  })
}
function goOut(weather) {
  return new Promise((resolve, reject) => {
    // asynchrone 
    setTimeout(() => {
      // aléatoire
      if (Math.random() > 0.9) {
        // cas favorable, j'ai le moral
        resolve(true);
      } else {
        // cas défavorable, je n'ai pas le moral
        if(weather !== "Il fait beau") reject(false);
        else reject("PAs de sortie, il ne faisait pas beau et j'ai pas le moral");
      }
    }, 2000);
  })
}
const pendingPromise = getWeather()
  .then(data => {
    console.log(`data`, data);
    //console.log(`pendingPromise : `, pendingPromise);
    return goOut(data);
  })
  .then(result => {
    console.log(`Sortie ?`, result);
  })
  .catch(error => {
    console.error(`Erreur attrapée`, error);
  });

console.log(`le script continue à vivre pendant que la promesse est en cours`);
console.log(`pendingPromise : `, pendingPromise);
// fonction anonyme immédiate
const getI = (function () {
  var i = 12;
  //console.log(`titi`);
  return function getI() {
    return i;
  }
})();

getI();
console.log(`i`, getI());

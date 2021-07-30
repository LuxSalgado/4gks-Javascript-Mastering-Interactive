// Write your function here
function getElementsLessThan100AtProperty (objeto,llave) {
  let objNuevo = [];
    console.log(objeto[llave].length)
    for (let i=0; i<objeto[llave].length; i++){
        if (objeto[llave][i] < 100){
            objNuevo.push(objeto[llave][i]);
        }
    }
    return objNuevo;
}
var obj = {
    key: [1000, 20, 50, 500]
  };
  var output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output); // --> [20, 50]
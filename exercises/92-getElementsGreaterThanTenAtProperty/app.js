// Write your function here
function getElementsGreaterThan10AtProperty (objeto,llave) {
    let objNuevo = [];
      console.log(objeto[llave].length)
      for (let i=0; i<objeto[llave].length; i++){
          if (objeto[llave][i] > 10){
              objNuevo.push(objeto[llave][i]);
          }
      }
      return objNuevo;
}
var obj = {
    key: [1, 20, 30]
  };
  var output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]
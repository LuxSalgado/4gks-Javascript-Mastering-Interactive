// Write your function here
function getElementsThatEqual10AtProperty(objeto,llave){
    let objNuevo = [];
    console.log(objeto[llave].length)
    for (let i=0; i<objeto[llave].length; i++){
        if (objeto[llave][i] == 10){
            objNuevo.push(10);
        }
    }
    return objNuevo;
}
var obj = {
    key: [1000, 10, 50, 10]
  };
  var output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output); // --> [10, 10]
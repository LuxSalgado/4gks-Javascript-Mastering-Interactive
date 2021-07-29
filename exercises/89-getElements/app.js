// Write your function here
function getElementsThatEqual10AtProperty(objeto,llave){
    let aux = [];
    aux = objeto[llave];
    let objNuevo = [];
    console.log(objeto.keys(llave))
    for (let i=0; i<Object.keys(llave).length; i++){
        console.log(i);
        if (aux[i] == 10){
            objNuevo.push(10);
            console.log(objNuevo);
        }
    }
    return objNuevo;
}
var obj = {
    key: [1000, 10, 50, 10]
  };
  var output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output); // --> [10, 10]
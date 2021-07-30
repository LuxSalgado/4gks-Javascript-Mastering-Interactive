// Write your function here
function getNthElementOfProperty (objeto,llave,indice){
    return objeto[llave][indice];
}
var obj = {
    key: [1, 2, 6]
  };
  var output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output); // --> 2
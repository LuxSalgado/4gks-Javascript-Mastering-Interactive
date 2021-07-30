// Write your function here
function getFirstElementOfProperty (objeto,llave){
    return objeto[llave][0];
}
var obj = {
    key: [1, 2, 4]
  };
  var output = getFirstElementOfProperty(obj, 'key');
  console.log(output); // --> 1
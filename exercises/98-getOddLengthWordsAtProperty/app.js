// Write your function here
function getOddLengthWordsAtProperty (obj,llave){
    let aux =  obj[llave].filter(palabra => palabra.length % 2 != 0);
    return aux;
}
var obj = {
    key: ['It', 'has', 'some', 'words']
  };
  var output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['has', 'words']
// Write your function here
function getAverageOfElementsAtProperty (objeto,llave) {
    var sum = 0;
    var array = objeto[llave];
    if (array.length === 0) {
        return 0;
    } else if (typeof array !== "object") {
        return 0;
    } else if (typeof array === "undefined") {
        return 0;
    } else {
        for (let i=0; i<array.length; i++) {
            sum = sum + array[i];
        }
        return sum/array.length;
    }
}
var obj = {
    key: []
  };
  var output = getAverageOfElementsAtProperty(obj, 'key');
  console.log(output); // --> 2
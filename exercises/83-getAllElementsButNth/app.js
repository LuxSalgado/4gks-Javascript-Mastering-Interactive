// Write your function here
function getAllElementsButNth (array,indice) {
    var aux = [];
    aux = array.filter(function(value, index){ 
        return index != indice;
    });
    return aux;
}
var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
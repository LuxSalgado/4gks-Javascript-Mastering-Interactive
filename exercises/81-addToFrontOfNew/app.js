// Write your function here
function addToFrontOfNew (entrada, num) {
    /* let aux = [];
    aux = entrada;
    aux2 = [num];
    aux2.push(aux[0],aux[1]);
    return aux2; */
    var aux = [];
    aux = [num].concat(entrada);
    return aux;
}
var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); //--> [1, 2]
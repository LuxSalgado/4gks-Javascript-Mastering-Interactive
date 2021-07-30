// Write your function here
function keep (array,mantener){
    let aux = array.filter(word => word == mantener);
    return aux;
}
var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output);
// Write your function here
function removeElement(array,discarder){
    let aux =  array.filter(element => element !== discarder);
    return aux;
}
var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]
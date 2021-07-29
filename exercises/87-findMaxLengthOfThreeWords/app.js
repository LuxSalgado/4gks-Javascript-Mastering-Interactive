// Write your function here
function findMaxLengthOfThreeWords(palabra1,palabra2,palabra3) {
    let maximo = "";
    if (String(palabra1).length > String(palabra2).length){
        maximo = palabra1;
    } else {
        maximo = palabra2;
    }
    if ((String(palabra3).length > maximo.length)){
        maximo = palabra3;
        return maximo.length;
    } else {
        return maximo.length;
    }
}
var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3
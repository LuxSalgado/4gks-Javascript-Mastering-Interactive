// Write your function here
function findMinLengthOfThreeWords(palabra1,palabra2,palabra3) {
    let minimo = "";
    if (String(palabra1).length < String(palabra2).length){
        minimo = palabra1;
    } else {
        minimo = palabra2;
    }
    if ((String(palabra3).length < minimo.length)){
        minimo = palabra3;
        return minimo.length;
    } else {
        return minimo.length;
    }
}
var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1
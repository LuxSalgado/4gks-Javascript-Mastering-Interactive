// Write your function here
function getIndexOf (letra,palabra){
    let sum = -1;
    let i = 0;
    while (i<String(palabra).length) {
        console.log(letra);  
        console.log(palabra.slice(i,1).toLowerCase());
        console.log(palabra);
        i++;
    }
    return sum;
}
var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2
// Write your function here
function isEvenLength (palabra) {
    if (String(palabra).length%2 == 0)
    return true;
    else
    return false;
}
var output = isEvenLength('wow');
console.log(output); // --> false
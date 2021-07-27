// Write your function here
function isSameLength (palabra1, palabra2) {
    if (String(palabra1).length === String(palabra2).length) {
        return true;
    } else {
        return false;
    }
}
var output = isSameLength('words', 'super');
console.log(output); // --> true
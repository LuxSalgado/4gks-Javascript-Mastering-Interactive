// Write your function here
function computeAverageLengthOfWords (palabra1,palabra2) {
    return (String(palabra1).length+String(palabra2).length)/2;
}
var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6
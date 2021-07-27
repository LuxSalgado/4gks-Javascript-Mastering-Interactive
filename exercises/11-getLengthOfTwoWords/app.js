function getLengthOfTwoWords(word1, word2) {
  // your code here
  return String(word1).length + String(word2).length; //Ojo con esto, para variables pasadas por parametros
}
var output = getLengthOfTwoWords('some', 'words');
console.log(output); // --> 9
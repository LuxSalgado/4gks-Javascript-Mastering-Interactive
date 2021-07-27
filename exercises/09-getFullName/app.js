function getFullName(firstName, lastName) {
  // your code here
  var concatenado = "";
  concatenado = firstName+" "+lastName;
  return concatenado;
}
var output = getFullName('Joe', 'Smith');
console.log(output); // --> 'Joe Smith'
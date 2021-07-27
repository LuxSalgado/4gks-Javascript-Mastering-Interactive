function addProperty(obj, key) {
  // your code here
  obj[key] = true; // dinamico - 'key' puede ser una variable
  return obj;
}
var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true
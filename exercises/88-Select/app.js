// Write your function here
function select (arreglo,objeto){
    let aux = [];
    let auxObj = {};
    aux = arreglo;
    for (let i=0; i<aux.length; i++){
        for (const key in objeto) {
            if (aux[i] == key){
                auxObj[key] = objeto[key];
            }
          }
    }
    return auxObj;
}
var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
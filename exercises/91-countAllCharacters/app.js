// Write your function here
function countAllCharacters (palabra){
    let obj = {};
    let tamano = String(palabra).length;
    for (let i=0; i<tamano; i++){
        console.log(String(palabra)[i]);
        if (String(palabra)[i] in obj){
            obj[String(palabra)[i]] = obj[String(palabra)[i]]+1;
        } else {
            obj[String(palabra)[i]] = 1;
        }
/* 


        for (const prop in obj) {
            
            obj[String(palabra)[i]] = 1;
            console.log(`obj.${prop} = ${obj[prop]}`);
          } */
    }



    return obj;
}
var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
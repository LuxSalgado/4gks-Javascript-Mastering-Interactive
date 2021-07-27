// Write your function here
function areValidCredentials (name,password){
    if ( String(name).length>3 || String(password).length>7 ) {
        return true;
    } else {
        return false;
    }
}
var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true
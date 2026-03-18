function getStatusCode(code){
    if(code>=200 && code <300) return "success";
    if(code>=400 && code <500) return "Client Error";
    if(code>=500) return "Server Error";
}
console.log(getStatusCode(200));
console.log(getStatusCode(400));
console.log(getStatusCode(500));

// Returns nothing → undefined
function logTest(name) {
    console.log(`Running: ${name}`);
    // no return statement
}


logTest("Hi this is a a log");

// Return multiple values via array or object

function aaa() {
    return [2, 2, 3, 5, 4];
    /// return {"name : pramod"}; - object
}
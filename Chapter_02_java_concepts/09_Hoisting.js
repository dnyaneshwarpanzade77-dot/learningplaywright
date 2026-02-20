// console.log(a); // undefined due to hoisting
// var a = "Danny";
// console.log(a); // Danny


//---memory creations phase---//

// var a; // undefined
// var b; // undefined

//---code execution phase---//
console.log(a);
var a = "Danny";
console.log(a);

//Hosting means that variable and function 
// declarations are moved to the top of their 
// containing scope during the compilation phase.
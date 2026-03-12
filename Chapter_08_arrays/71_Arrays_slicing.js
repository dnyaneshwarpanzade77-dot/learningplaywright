//slicing & combining

let arr = [1,2,3,4,5];

//slice(start,end)-returns new array, does not mutate -> (start,end-1) ,index =0
// console.log(arr.slice(1,3));
// console.log(arr.slice(2,4));

//console.log(arr.slice(2));
// console.log(arr.slice(0));
// console.log(arr.slice(-5));
// console.log(arr.slice(-2));
// console.log(arr.slice(-3));

//concat 

// let a = [1,2];
// let b =[3,4];
// //let c =a.concat(b,[5,6]);
// let c =a.concat(b);
// console.log(c);

//spread modern way 

// let d = [...a, ...b];
// console.log(d);

//join
let c = ["pass","fail","skip"].join();
let d = ["pass","fail","skip"].join(" | ");
let e = ["pass","fail","skip"].join(" = ");
console.log(c);
console.log(d);
console.log(e);
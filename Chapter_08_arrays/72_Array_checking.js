//checking array 

let result = Array.isArray([1,2,3]);
let result1= Array.isArray("a");
console.log(result);
console.log(result1);

//every
let a = [80,90,95].every(s=> s>=70);
console.log(a);

//some-at least one pass 
let b = [80,60,95].some(s=> s<70);
console.log(b);

let c = [80,85,95].some(s=> s<70);
console.log(c);
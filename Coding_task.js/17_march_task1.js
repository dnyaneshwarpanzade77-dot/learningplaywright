// // Task 1
// console.log(greet("Alice"));
// function greet(name) {
//   return `Hello, ${name}!`;
// }

// //Task 2
// console.log(getStatus(200));
// const getStatus = (code) => code >= 200 ? "ok" : "error";

// //Task 3
// function analyze(scores = []) {
//   return scores.filter(s => s >= 70).length;
// }
// console.log(analyze());

// //Task 4
// function makeCounter() {
//   let count = 0;
//   return () => ++count;
// }
// let counter = makeCounter();
// counter();
// counter();
// console.log(counter());

//Task 5
//Which is a pure function? 
// a) function log(msg) { console.log(msg); } 
// b) function add(a, b) { return a + b; } 
// c) function getTime() { return Date.now(); } 
// d) function push(arr, val) { arr.push(val); return arr; }
 // Answer: b

 //Task 6
 function test(...args) {
  return args.length;
}
console.log(test("login", "pass", 200, true));

//Task 7
const obj = {
  env: "staging",
  getEnv: () => {
    return this.env;
  }
};
console.log(obj.getEnv());

//Task 8
function double(n) { return n * 2; }
function addOne(n) { return n + 1; }
[1, 2, 3].map(double).map(addOne);

//Task 9
function run(fn) {
  return fn("Login");
}
console.log(run(name => `Running: ${name}`));

//Task 10
function outer() {
  let x = 10;
  function inner() {
    let x = 20;
    return x;
  }
  return x + inner();
}
console.log(outer());


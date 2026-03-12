//Array 

let fruits = [];
let fruits_fresh = ["Apple","Banana","Mango"]; 
// 3 index-0,1,2

let arr = [10,20,30,40];
//4 index 0-3
console.log(arr.length);
console.log(arr[0]);
console.log(arr[3]);
console.log(arr[4]);

let testresult = ["pass", "fail", "pass", "skip"];
 
let mixed = [1, "Test", true, null];


//creating array 

//array literal prefered 
let browser = ["chrome","firefox","safari"];

//Array constructor
let score = new Array(3);  // creates [empty x 3]
let score2 = new Array(1,2,3); //creates[1,2,3]

let numbers = new Array(100,200,300,400);
console.log(numbers);

let test = Array.of(10,20,30,40);
console.log(test);
console.log(test[0]);

let char = Array.from("Hello");




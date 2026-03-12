let score = [45,82,91,60,73];
//map - transform every element, return new element 

let grades = score.map(s => s>70 ? "Pass" : "Fail");
console.log(grades);

//filter - keeps elements that pass a test

let passing = score.filter(s=> s>=70);
console.log(passing);

//reduce- accumulate to a single value 

let total =score.reduce((sum,s) => sum + s, 0 );
console.log(total);

// flat — flattens nested arrays
let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat());
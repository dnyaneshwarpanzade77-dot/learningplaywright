//without function - repetaed logic 
let score1 = 85;
let result1 = score1 >= 70 ? "pass": "fail";
console.log(result1);

let score2 = 45;
let result2 = score2 >= 70 ? "pass": "fail";
console.log(result2);

function getResult (Score){
    return score2 >= 70 ? "pass": "fail";
}

getResult(85); //Pass
getResult(45); //Fail
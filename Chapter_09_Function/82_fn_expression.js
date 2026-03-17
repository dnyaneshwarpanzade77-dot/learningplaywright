const greet = function (name) {
    return `Hello, ${name}!`;
};

// Type 4 Function 
function greet1(name1) {
    return `Hello, ${name1}!`;
}

// Functions as Expression
const greet2 = function (name1) {
    return `Hello, ${name1}!`;
}

// console.log(greet("Bob"));
console.log(greet1("Danny"));
console.log(greet2("Danny"));
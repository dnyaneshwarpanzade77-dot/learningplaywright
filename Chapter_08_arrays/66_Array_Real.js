let browser = ["chrome","firefox","safari","opera","edge"];
console.log(browser.length);
console.log(browser);

browser.pop();
console.log(browser);

//browser.shift(0);
//console.log(browser);

console.log("................................");

let removed = browser.shift();
console.log(browser);
console.log(removed);

console.log( "................................");

for(let i = 0; i<browser.length;i++){
    console.log(browser[i]);
    if(browser[i]==="opera"){
        console.log("opera is removed from selenium");
    }
}
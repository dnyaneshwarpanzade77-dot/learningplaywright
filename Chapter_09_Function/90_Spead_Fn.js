function add(a,b,c){
    return a + b + c;
}

let num = [1,2,3];
console.log(add(...num));
//.....................

function hasError(...code){
    return code.some(c=> c >=400);
}

let responsecode = [200, 201, 404];
console.log(hasError(responsecode));

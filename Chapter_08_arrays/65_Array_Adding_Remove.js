let arr =[1,2,3];
console.log(arr);

// add to end 
arr.push(4);
console.log(arr)

//remove from end 
arr.pop(3);
console.log(arr);

arr.push(5,6);
console.log(arr)

// add to begining
arr.unshift(0);
console.log(arr);

//remove from begining
arr.shift(0);
console.log(arr);

//splice (start, deleteCount...itemstoadd)

arr.splice(2,1);  //removes 1 items at index 2 
console.log(arr);

arr.splice(2,0,99); //add 99 items at index 2 
console.log(arr);

arr.splice(1,2,10,20);
console.log(arr);
//Searching

let results = ["pass","fail","pass","error","fail"];

//indexof - return first index, or -1 if not found
results.indexOf("fail"); //1
results.indexOf("skip"); //-1

//lastindexof - searches from the end
results.lastIndexOf("fail");  //4

//includes - return boolen
results.includes("error");  //true
results.includes("skip");  //false

//find - return first matching elements

let num = [10,25,30,40];
num.find(x => x>20); //25,30,40 Answer-25

//findindex
num.findIndex(x => x>20);
num.findLast(x => x>20);  //40
num.findLastIndex(x => x>20); //3 

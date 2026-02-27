let x =10;

switch(x){
    case 10:
        let b1 = 5;
    console.log("x is 10");
    break;

    case 10:
        let b2 = 4;
    console.log("x is 10"); 
    break;

    default:
    console.log("x is not 10"); 
}

// it will allow to have duplicate cases but 
// it will execute only the first case and ignore the second case. 
// It will not throw any error. 
// It is not a good practice to have duplicate cases in switch statement. 
// It can lead to confusion and bugs in the code. 
// It is better to avoid duplicate cases in switch statement.
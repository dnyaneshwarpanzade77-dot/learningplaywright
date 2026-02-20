function getUserStatus(){

    console.log(status_code);
    var status_code = "Active";
    console.log(status_code);

}
// Calling the function
getUserStatus();

//var - Function Scoped- so status is hoisted automatically and assigned undefined, 
// so first console will print undefined and 
// then after assignment it will print Active


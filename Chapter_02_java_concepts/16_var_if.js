var a = "Danny";

if(true){
    console.log(a);// it will be local variable ,TDZ
    var a = "summer";
    console.log(a);
}

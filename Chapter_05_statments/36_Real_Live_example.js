let userloggedIn = true;
let userRole= "editor";

if(userloggedIn){
    if(userRole === "Admin"){
        console.log("user has all access");
}else if(userRole === "editor"){
    console.log("user has editor access");
}else if(userRole === "viewer"){
    console.log("user has viewer access");
}else {
    console.log("user has guest access");
}  
   
}
else{
    console.log("user is not logged in");
}

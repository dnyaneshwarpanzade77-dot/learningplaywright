//200, 400, 404 

let responsecode = 400;
switch(responsecode){
    case 200:
        console.log("Success");
        break;      
    case 400:
        console.log("Bad Request");
        break;  

        default:
        console.log("Unknown status code"); 

}
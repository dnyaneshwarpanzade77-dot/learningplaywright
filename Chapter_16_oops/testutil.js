export let Base_Url = "https://app.vwo.com/#/login";

export function formatUpperCaseString(sname){
    return sname.toUpperCase(); 
}

let fname = "Danny"; // This is not exported. That's why you cannot import it into other classes.
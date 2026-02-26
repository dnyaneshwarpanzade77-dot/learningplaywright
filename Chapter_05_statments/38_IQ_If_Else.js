//truthy values
if("Hello") console.log("string is truthy");
if(42) console.log("number is truthy");
if({}) console.log("object is truthy");
if([]) console.log("array is truthy");

//falsy values
if("") console.log("wont be printed");
if(null) console.log("wont be printed");
if(undefined) console.log("wont be printed");
if(0) console.log("wont be printed");
if(NaN) console.log("wont be printed");    
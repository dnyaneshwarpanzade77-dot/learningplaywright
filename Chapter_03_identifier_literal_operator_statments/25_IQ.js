0 == "" // true
0 == "0" // true (type coercion)
0 == false // true (type coercion)
null == undefined // true (both represent absence of value)
"\t\n" == 0 // true (whitespace is ignored in type coercion)

null == 0 // false (null is only equal to undefined)
undefined == 0 // false (undefined is only equal to null)
null == false // false (null is only equal to undefined)
null == "" // false (null is only equal to undefined)
undefined == false // false (undefined is only equal to null)
undefined == "" // false (undefined is only equal to null)
NaN == NaN // false (NaN is not equal to anything, including itself)


console.log("" === false); // false (no type coercion, different types)
console.log("" == false); // true (type coercion, both are falsy)
console.log(null == undefined); // true (both represent absence of value)   
console.log(null === undefined); // false (different types)
console.log(0 === false); // false (different types)

console.log("" == false); // true (type coercion, both are falsy)
console.log("" == "0"); // false (empty string is not equal to "0")



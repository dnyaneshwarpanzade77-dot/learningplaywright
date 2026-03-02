let a=20;
let b=15;
let c=10;

if(a==b && b==c && c==a)
    {
    console.log("Equilateral Triangle");
    }
else if(a==b || b==c || c==a)
    {
    console.log("Scalene Triangle");
    }
else 
    {
console.log("Isosceles Triangle");
    }
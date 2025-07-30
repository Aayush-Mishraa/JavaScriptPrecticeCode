let a=10; //global variable

function test (){
    let a = 20;
    console.log(a); // 20
    if(true)
    {
        let a = 30;
        console.log(a);
    }
    console.log(a);
}
 console.log(a);  
test(); 
 console.log(a);

console.log("================================================================");
// console.log(age);
// let age = 30;

console.log("================================================================");

let n = 10;
//let n = 40; Redeclaring variable with let is not allowed
 
n = 20; // Reassigning is allowed
console.log("Reassigned n:", n); // 20

console.log("================================================================");
console.log("OS");
let OS = "Windows";     

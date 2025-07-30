//arrow function --no function naem -- also called anonymous function
//Arrow functions are a more concise syntax for writing function expressions in JavaScript.

let print  = ()=>{
    console.log("This is an arrow function");
}

print(); // This is an arrow function   


//arrow function with two parameters
let even = (num)=> num %2 ===0;

let e1 = even(10);
console.log(e1); // true

console.log("=====  =====    ======  ======    ======   ====="); // false


//arrow function with two parameters
let add = (a, b) => a + b;
let sum = add(5, 10);
console.log(sum); // 15

console.log("=====  =====    ======  ======    ======   ====="); 

let bye = e=> console.log(e + " World");
bye()                   // undefined World      
bye("Hello");         // Hello World



/**
 * 
 * 
 */
let openBrowser = browserName =>{
    switch(browserName){
        case "Chrome":
            console.log("You are using Chrome");
            break;
        case "Firefox":
            console.log("You are using Firefox");
            break;
        default:
            console.log("Browser not recognized");
    }
}

openBrowser("Chrome");    // You are using Chrome
openBrowser(); // Browser not recognized
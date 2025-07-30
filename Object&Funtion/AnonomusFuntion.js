//anonymous function: Means a function without a name
//Anonymous functions are often used as arguments to other functions or as immediately invoked function expressions (IIFEs).


say()// Example of an anonymous function
let say = function() {
    console.log("This is an anonymous function");
}
say(); // This is an anonymous function

//can anonymous function can be Hoisted?
// No, anonymous functions cannot be hoisted like named functions.
 

let add = function(a, b) {
    return a + b;
}
// Example of an anonymous function assigned to a variable
console.log(add(5, 10)); // 15




// Example 1: Variable Scope with var
var a = 10; // global variable

function test() {
    var a = 20; // function scope
    console.log("Inside function, before if:", a); // 20
    if (true) {
        var a = 30; // still function scope, redeclares 'a'
        console.log("Inside if block:", a); // 30
    }
    console.log("Inside function, after if:", a); // 30
}
console.log("Before funtion call a:", a);
test();
console.log("Global a:", a); // 10

console.log("==============================================");

// Example 2: Redeclaring Variables with var
var number = 10;
var number = 20; // redeclaration is allowed with var
console.log("Redeclared number:", number); // 20

console.log("==============================================");

// Example 3: Redeclaring and Reassigning Strings
var browser = "Chrome";
var browser = "Firefox"; // redeclaration is allowed
console.log("Redeclared browser:", browser); // Firefox

console.log("==============================================");

// Example 4: Reassigning Variables
var x = 5;
x = 10; // reassigning is allowed
console.log("Reassigned x:", x); // 10

console.log("==============================================");

// Example 5: Hoisting with var
// Variable 'num' is hoisted but not initialized, so it's undefined here
console.log("Hoisted num before declaration:", num); // undefined
var num = 5; // declaration and initialization
console.log("Hoisted num after declaration:", num); // 5

console.log("==============================================");
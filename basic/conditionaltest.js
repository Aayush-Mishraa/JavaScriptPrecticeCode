console.log("===================================Conditional Test==================================");

console.log("===================================If Statement==================================");

let a = 10;
let b = 20;

if (a >b) {
    console.log("passed ");

}
else{
    console.log("failed");
}

if (true){
    console.log("bye");

}else{
    console.log("hello");   //DEAD CODE NOT EXECUTED NEVER REACHED TO ELSE BLOCK 
}


let isElementDisplayed = false

if(isElementDisplayed){
    console.log("Element is displayed")}

else{
    console.log("Element is not displayed")
}


//compaire : == vs ===
//==loose equality: value is compared, type is not considered
//=== strict equality: value and type are compared
let x = 10;     
let y = "10";
console.log(x == y);  // Output: true (loose equality, value is the same)
console.log(x === y); // Output: false (strict equality, type is different)

console.log(true == 1);  // Output: true (loose equality, true is treated as 1)
console.log(true === 1); // Output: false (strict equality, true is boolean, 1 is number)
console.log(false == 0); // Output: true (loose equality, false is treated as 0)
console.log(false === 0); // Output: false (strict equality, false is boolean, 0 is number)

console.log(""==0); // Output: true (loose equality, empty string is treated as 0)
console.log(""===0); // Output: false (strict equality, empty string is string, 0 is number).
console.log(null == undefined); // Output: true (loose equality, null and undefined are considered equal)
console.log(null === undefined); // Output: false (strict equality, null and undefined are different types)
console.log("5" == 5); // Output: true (loose equality, "   5" is treated as 5)
console.log("5" === 5); // Output: false (strict equality, "5" is string, 5 is number)
console.log("5" == "5"); // Output: true (loose equality, both are strings with the same value)
console.log("5" === "5"); // Output: true (strict equality, both are strings with the same value)

console.log([] == 0); // Output: true (loose equality, empty array is treated as 0)
//console.log([] === 0); // Output: false (strict equality, empty array is object, 0 is number)
console.log([1, 2] == "1,2"); // Output: true (loose equality, array is converted to string)
//console.log([1, 2] === "1,2"); // Output: false (   strict equality, array is object, "1,2" is string)
// console.log([1, 2] == [1, 2]); // Output: false (loose equality, different array objects)
// console.log([1, 2] === [1, 2]); // Output: false (strict equality, different array objects)
// console.log({} == "[object Object]"); // Output: true (loose equality, object is converted to string)
// console.log({} === "[object Object]"); // Output: false (strict equality, object is object, string is string)
// console.log({ a: 1 } == { a: 1 }); // Output: false 


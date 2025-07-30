let a = 100;
let b = 200;

console.log("a + b = " + (a + b));  // Output: a + b = 300
console.log("a - b = " + (a - b));  // Output: a - b = -100
console.log("a * b = " + (a * b));  // Output: a * b = 20000
console.log("a / b = " + (a / b));  // Output: a / b = 0.5


let x = 'hello';
let y = 'playwright';

console.log("x + y = " + (x + y));  // Output: x + y = helloplaywright
console.log(a+b+x+y);  // Output: a + b + x + y = 300helloplaywright
console.log(x+y+a+b);  // Output: x + y + a + b = helloplaywright300)
console.log(x+y+(a+b));  // Output: x + y + (a + b) = helloplaywright300
console.log(a + b + x + y + a + b); // Output: a + b + x + y + a + b = 300helloplaywright300

console.log('the value of a is ' + a );

console.log('the value of b is ' + b );
console.log('sum of a and b is ' + (a + b) );

console.log(true +'hello'+ false);  // Output: truehellofalse
console.log('hello' + true + false);  // Output: hellotruefalse
//number
//1 bite = 8 bits
//size: 8 bytes = 64 bits
let a = 10; // global variable
let b = 12.33;
let c = 100; // string

console.log("Number a:", a); // 10

console.log(typeof(a))

//string
//size: 2 bytes for each characters
let naame = 'Ayush Mishra';
let browser = 'chrome';
let version = '11.1.1.1.1';
let lang= 'js';
console.log(typeof(naame))

//boolean 
//size 4 bytes = 32 bites
let flag = true
let isActive = false 

console.log(typeof(flag))
console.log(typeof(isActive))

//undefined
//size  not fixed, depends on the js engine; may vary from 0 to 4 bytes
let p;
console.log(typeof(p));

//null
//size  not fixed, depends on the js engine; may vary from 0 to 4 bytes
let driver = null;
console.log(driver);
console.log(typeof(driver))//type of null -- object -- exsiting in js

// 
let username ='';
console.log(typeof(username));

//bigInt
//size  not fixed, depends on the js engine; may vary from 0 to 4 bytes


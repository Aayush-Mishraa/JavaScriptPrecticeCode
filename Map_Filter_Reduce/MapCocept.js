let number = [1,2,3,4,5,6,7,8,9,10];
let num = number.map(ele=>ele+5);
console.log(num);
console.log(number);


let myNum =number.map(ele=> ele*ele);
console.log(myNum); //squre of each element
console.log(number); //original array remains unchanged

let words = ["apple", "banana", "cherry"];
let upperCase = words.map(ele=>ele.toUpperCase());
console.log(upperCase); // ["APPLE", "BANANA", "CHERRY"]


//get the first leter of each word

let firstletter = words.map(ele=>ele[0]);
console.log(firstletter); // ["a", "b", "c"]
console.log("Orignal Array = "+words); // original array remains unchanged


//hello world
console.log(words.map(ele => ele+'!'))

let products =['help', 'prime', 'music', 'pay', 'store'];
let product = products.map(ele =>'Amazon '+ ele);
console.log(product); // ["Amazon help", "Amazon prime", "Amazon music", "Amazon pay", "Amazon store"]
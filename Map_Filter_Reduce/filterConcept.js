let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNum = number.filter(ele => ele % 2 == 0);
console.log(evenNum); // [2, 4, 6, 8, 10]

let oddNum = number.filter(ele => ele % 2 !== 0);
console.log(oddNum)


let greaterThen5 =  number.filter(ele=>ele>5);

console.log(greaterThen5); // [6, 7, 8, 9, 10]


let rangeNum = number.filter(ele => ele>=3 && ele<=7)
console.log(rangeNum); // [3, 4, 5, 6, 7]




let link = ['help', 'prime', 'music', 'pay', 'store', 'contact', 'cart'];


let linklength = link.filter(ele => ele.length > 4);
console.log(linklength); // ["prime", "music", "store", "contact"]

let footerLink = ['amazon help', 'amazon prime', 'amazon music', 'amazon pay', 'amazon store'];
let footerLinklINK = footerLink.filter(ele=>ele.startsWith())


let marks = [-45, -67, -89, -34, -23, -78, 90, 56];
//find -
//GIVE ME POSSITIVE MARKS
let positiveMarks = marks.filter(ele => ele > 0).filter(ele=>ele>70);
console.log(positiveMarks); // [90, 56]


let Header = ['amazon help', 'amazon prime', 'music', 'pay', 'store', 'amazon contact', 'cart'];

//give me only those thing its contains amazon then i want  contain  prime 
let amazonLinks = Header.filter(ele => ele.includes('amazon'));

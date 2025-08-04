let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
number.reduce((total,  num)=> num + total);
console.log(number.reduce((total, num) => num + total, 0)); // 55

//multply all the number 
console.log(number.reduce((total, num) => num * total, 1)); // 3628800

let dict =['help', 'JavaScript', 'music', 'pay', 'store'];
//combain all of them together space ' '
console.log(dict.reduce((total, word) => total + ' ' + word, '')); // " help JavaScript music pay store"


//
let marks =[85, 90, 78, 92]
//find  the avgare of this marks

let average = marks.reduce((total, mark) => total + mark, 0) / marks.length;
console.log(average); // 86.6

let 






// This code demonstrates the behavior of different mathematical operations in JavaScript,
console.log('=================================Addition=============================================');

console.log(1+1);
console.log(1+'1');  // Output: 11 (number + string results in string concatenation)    
console.log('1' + '1');  // Output: 11 (string + string results in string concatenation)
console.log(1 + 1 + '1');  // Output: 21 (number + number results in number addition, then concatenated with string)
console.log('1' + 1 + 1);  // Output: 111 (string + number results in string concatenation)
console.log(1 + 1 + 1 + '1');  // Output: 31 (number + number + number results in number addition, then concatenated with string)
console.log('1' + 1 + 1 + 1);  // Output: 1111 (string + number + number results in string concatenation)
console.log(1 + '1' + 1);  // Output: 111 (number + string results in string concatenation)
console.log('1' + 1 + '1');  // Output: 111 (   string + number results in string concatenation)
console.log(1 + 1 + '1' + 1);  // Output:           211 (number + number results in number addition, then concatenated with string, then concatenated with number)
console.log('1' + 1 + '1' + 1);  // Output                  

console.log('=================================Subsctioon=================================');
console.log(1-'1');  // String number '1' -->1-1 = Output: 0 (number - string results in number subtraction)
console.log('5' - 2);  // Output: 3 (string number '5' -->5-2 = number subtraction)
console.log('5' - '2');  // Output: 3 (string numbers '5' and '2' -->5-2 = number subtraction)
console.log(5 - 'HELLO');  // Output: NaN (string 'HELLO' cannot be converted to a number, so subtraction results in NaN)

console.log('==================================Multiplication==================================');
console.log(2 * 3);// Output: 6 (number multiplication)
console.log('2' * 3);// Output: 6 (string number '2' -->2*3 = number multiplication)
console.log(2 * '3');// Output: 6 (string number '3' -->2*3 = number multiplication)              
console.log('2' * '3');// Output: 6 (string numbers '2' and '3' -->2*3 = number multiplication)
console.log(2 * 'HELLO');// Output: NaN (string 'HELLO' cannot be converted to a number, so multiplication results in NaN)        
console.log('HELLO' * 'WORLD');// Output: NaN (both strings cannot be converted to numbers, so multiplication results in NaN)


let price = '1000';
console.log(price+5);
console.log(price-5);  // Output: 995 (string number '1000' -->1000-5 = number subtraction)
console.log(price*5);  // Output: 5000 (string number '1000 -->1000*5 = number multiplication)
console.log(price/5);  // Output: 200 (string number '1000' -->1000/5 = number division)

console.log('==================================Division==================================');
console.log(10 / 2);  // Output: 5 (number division)  
console.log(2/ 10);  // Output: 0.2 (number division results in a decimal value)
console.log('10' / 2);  // Output: 5 (string number '10' -->10/2 = number division)
console.log(10 / '2');  // Output: 5 (string number '2' -->10/2 = number division)
console.log('10' / '2');  // Output: 5 (string numbers '10' and '2' -->10/2 = number division)
console.log(10 / 'HELLO');  // Output: NaN (string 'HELLO' cannot be converted to a number, so division results in NaN)
console.log('HELLO' / 'WORLD');  // Output: NaN (both strings cannot be converted to numbers, so division results in NaN)      
console.log(10 / 0);  // Output: Infinity (division by zero results in Infinity)
console.log(0 / 10);  // Output: 0 (zero divided by a number is zero)        
console.log(0 / 0);  // Output: NaN (zero divided by zero is undefined, resulting in NaN)   
console.log(0 / 0.0);  // Output: NaN (zero divided by zero is undefined, resulting in NaN)
console.log(0.0 / 0.0);  // Output: NaN (zero divided by zero is undefined, resulting in NaN)

console.log('==================================Modulus==================================');
console.log(8% 2);  // Output: 1 (remainder of 10 divided by 3 is 1)
console.log(10 % 3);  // Output: 1 (remainder of 10 divided by 3 is 1)
console.log(10 % 2);  // Output: 0 (remainder of 10 divided by 2 is 0)
console.log(10 % 5);  // Output: 0 (remainder of 10 divided by 5 is 0)
console.log(10 % 4);  // Output: 2 (remainder of 10 divided by 4 is 2)
console.log(10 % 0);  // Output: NaN (division by zero results in NaN)
console.log(10 % '2');  // Output: 0 (remainder of 10 divided by string number '2' is 0)
console.log(10 % 'HELLO');  // Output: NaN (string 'HEL LO' cannot be converted to a number, so modulus results in NaN)
console.log('HELLO' % 'WORLD');  // Output: NaN (both strings cannot be converted to numbers, so modulus results in NaN) 


console.log("==================================concat number==================================");    

console.log('800'+'200');  // Output: 800200 (string concatenation)

console.log('===================================Exponential==================================');

console.log(2 ** 3);  // Output: 8 (2 raised to the power of 3)
console.log(3 ** 2);  // Output: 9 (3 raised to the power of 2)     
console.log(2^0);  // Output: 1 (any number raised to the power of 0 is 1) 
console.log(3 ** '2');  // Output: 9 (3 raised to the power of 2)    

console.log(+'42');  // Output: 42 (string '42' converted to number)
console.log(+'3.14');  // Output: 3.14 (string '3.14' converted to number)
console.log(+'hello');  // Output: NaN (string 'hello' cannot be converted to a number, so it results in NaN)
console.log(+'');  // Output: 0 (empty string converted to number is 0)
console.log(+' ');  // Output: 0 (string with only whitespace converted to number is 0)
console.log(+'0');  // Output: 0 (string '0' converted to number is 0)
console.log(+'1');  // Output: 1 (string '1' converted to number is 1)
console.log(+'-1');  // Output: -1 (string '-1' converted to number is -1)
console.log(+'Infinity');  // Output: Infinity (string 'Infinity' converted to number is Infinity)
console.log(+'NaN');  // Output: NaN (string 'NaN'  converted to number is NaN)
console.log(+'null');  // Output: 0 (string 'null' converted to number is 0)
console.log(+'undefined');  // Output: NaN (string 'undefined' cannot be    converted to a number, so it results in NaN)
console.log(+'true');  // Output: NaN (string 'true' cannot be  converted to a number, so it results in NaN)
console.log(+'false');  // Output: NaN (string 'false' cannot be    converted to a number, so it results in NaN)          

console.log('===================================Unary Plus==================================');
console.log(+42);  // Output: 42 (number 42 remains unchanged)
console.log(+'42');  // Output: 42 (string '42' converted to number)
console.log(+3.14);  // Output: 3.14 (number 3.14 remains unchanged)
console.log(+'3.14');  // Output: 3.14 (string '3.14' converted to number)
console.log(+true);  // Output: 1 (boolean true converted to number is  1)                      
console.log(+false);  // Output: 0 (boolean false converted to number is 0)
console.log(+null);  // Output: 0 (null converted to number is 0            
console.log(+undefined);  // Output: NaN (undefined cannot be converted to a number, so it results in NaN)
console.log(+NaN);  // Output: NaN (NaN remains NaN)    
console.log(+Infinity);  // Output: Infinity (Infinity remains Infinity)   

console.log("===================================Unary Negation==================================");
console.log(-42);  // Output: -42 (number 42 negated to -42)
console.log(-'42');  // Output: -42 (string '42' converted to   number and negated)
console.log(-3.14);  // Output: -3.14 (number 3.14 negated to -3.14)
console.log(-'3.14');  // Output: -3.14 (string '3.14' converted to number and negated)
console.log(-true);  // Output: -1 (boolean true converted to number is 1, then negated to -1)
console.log(-false);  // Output: 0 (boolean false converted to number is 0, then negated to 0)
console.log(-null);  // Output: 0 (null converted to number is 0, then negated to 0)
console.log(-undefined);  // Output: NaN (undefined cannot be converted to a number, so it results in NaN)
console.log(-NaN);  // Output: NaN (NaN remains NaN)            
console.log(-Infinity);  // Output: -Infinity (Infinity negated to -Infinity)   
console.log(-'');  // Output: -0 (empty string converted to number is 0, then negated to -0)
console.log(-' ');  // Output: -0 (string with only whitespace converted to number is 0, then negated to -0)
console.log(-'0');  // Output: -0 (string '0' converted to number is 0, then negated to -0)
console.log(-'1');  // Output: -1 (string '1' converted to      number is 1, then negated to -1)
console.log(-'-1');  // Output: 1 (string '-1' converted to number is -1, then negated to 1)
console.log(-'Infinity');  // Output: -Infinity (string 'Infinity' converted to number is Infinity, then negated to -Infinity)
console.log(-'NaN');  // Output: NaN (string 'NaN'  converted to number is NaN, so it remains NaN)                                              
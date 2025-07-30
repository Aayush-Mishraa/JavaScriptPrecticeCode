console.log("===================================Post Increment==================================");
let a = 10;
let b = a++;    
// Post-increment: b gets the value of a before incrementing, then a is incremented
console.log("a:", a); // Output: 11 

console.log("b:", b); // Output: 10 


console.log("===================================Pre Increment==================================");
let c = 10;
let d = ++c;
// Pre-increment: c is incremented first, then d gets the new value of c        
console.log("c:", c); // Output: 11
console.log("d:", d); // Output: 11 
console.log("===================================Post Decrement==================================");
let e = 10;                         
let f = e--;
// Post-decrement: f gets the value of e before decrementing, then e is decremented
console.log("e:", e); // Output: 9      
console.log("f:", f); // Output: 10

console.log("===================================Pre Decrement==================================");
let g = 10;     
let h = --g;
// Pre-decrement: g is decremented first, then h gets the new value of g        
console.log("g:", g); // Output: 9
console.log("h:", h); // Output: 9  
console.log("===================================Combined Increment and Decrement==================================");
let i = 10;                 

let j = i++ + --i - --i + i-- + ++i;
// Explanation:                     
// 1. i++: Post-increment, j gets 10, i becomes 11
// 2. --i: Pre-decrement, i becomes 10, j is now 10 + 10 = 20
// 3. --i: Pre-decrement, i becomes 9, j is now 20 + 9 = 29
// 4. i--: Post-decrement, j is now 29 + 9         
// 5. ++i: Pre-increment, i becomes 10, j is now 29 + 10 = 39
console.log("i:", i); // Output: 10
console.log("j:", j); // Output: 39 
console.log("===================================Combined Increment and Decrement with Different Values==================================");
let k = 5;      
let l = 3;
let m = k++ + --l - --k + l-- + ++k;        

// Explanation: 


// 1. k++: Post-increment, m gets 5, k becomes 6
// 2. --l: Pre-decrement, l becomes 2, m is now 5 + 2 = 7
// 3. --k: Pre-decrement, k becomes 5, m is now 7 + 5 = 12
// 4. l--: Post-decrement, m is now 12 + 2                              
// 5. ++k: Pre-increment, k becomes 6, m is now 12 + 6 = 18
console.log("k:", k); // Output: 6  



console.log("l:", l); // Output: 1
console.log("m:", m); // Output: 18         


let s = 0;
let w = s++ - --s  +    ++s - s--; 
// Explanation:
// 1. s++: Post-increment, w gets 0, s becomes 1
// 2. --s: Pre-decrement, s becomes 0, w is now 0 + 0 = 0
// 3. ++s: Pre-increment, s becomes 1, w is now 0 + 1 = 1
// 4. s--: Post-decrement, w is now 1 + 1                   
// 5. Final value of s is 0 after the last operation
console.log("s:", s); // Output: 0  
console.log("w:", w); // Output: 1

console.log("===================================Combined Increment and Decrement with Different Values==================================");
let m1 = 0;
let n1 = 0;
let p1 = --m1 * --n1 * n1-- * m1--;  
console.log("m1:", m1); // Output: -1
console.log("n1:", n1); // Output: -1
console.log("p1:", p1); // Output: 0    


let d1 = 1.5;
let D = 2.5;
let f1 = d1++  + ++D;



console.log("===================================Array Concept==================================");
let n = [];
console.log(n.length); // Output: 0 (length of empty array)

let array = [1, 2, 3, 4, 5];
console.log(array.length); // Output: 5 (length of array with 5 elements)   
console.log(array[0]); // Output: 1 (first element of the array)
console.log(array[1]); // Output: 2 (second element of the array)   

console.log(array[4]); // Output: 5 (fifth element of the array)
console.log(array[5]); // Output: undefined (index 5 is out of bounds)
console.log(array[-1]); // Output: undefined (negative index is not valid in arrays)

//mixed data types in array
let mixedArray = [1, "two", true, 20 , true , 'f'];//0-5:6
console.log(mixedArray.length); // Output: 6 (length of mixed array)
console.log(mixedArray);

//Using array constructor

let number = new Array(100,200,300,400,500)
console.log(number); 

console.log(number.length); // Output: 5 (length of array created with Array constructor)
console.log(number[0]); // Output: 100 (first element of the array) 

//dynamic array creation
console.log("===================================Dynamic Array Creation=================================="); 
let num = [1,3,456,6,77];
console.log(num.length); // Output: 5 (length of num array)
num.push(100); // Adds 100 to the end of the array
console.log(num); // Output: [1, 3, 456, 6, 77, 100]
console.log(num.length); // Output: 6 (length after adding an element)
num.push('chrome'); // Adds 'chrome' to the end of the array
console.log(num); // Output: [1, 3, 456, 6, 77, 100, 'chrome']

//add to the beginning of the array
num.unshift('fireFox'); // Adds 'fireFox' to the beginning of the array
console.log(num); // Output: ['fireFox', 1, 3, 456, 6, 77, 100, 'chrome']

//remove from the end of the array
console.log("===================================Remove from the end of the array==================================");
let broowsers = ['fireFox', 'chrome', 'safari', 'edge'];
console.log(broowsers); // Output: ['fireFox', 'chrome', 'safari', 'edge']
console.log(broowsers.length); // Output: 4 (length of broowsers array)
// Removes the last element ('edge') from the array
broowsers.pop(); // Output: 'edge' (the removed element)
console.log(broowsers); // Output: ['fireFox', 'chrome', 'safari']


//REMOVE FROM THE BEGINNING OF THE ARRAY
let removed = broowsers.shift(); //returns the removed element
console.log(removed); // Output: 'fireFox' (the removed element)
console.log(broowsers); // Output: ['chrome', 'safari'] 

//print all elements of the array using loop                
console.log("===================================Print all elements of the array using loop==================================");
let myAllBrowsers = ['fireFox', 'chrome', 'safari', 'edge','opera', 'brave','vivaldi', 'tor'];
//1 index loop
for (let i = 0; i < myAllBrowsers.length; i++) {
    console.log(myAllBrowsers[i]); // Output: each browser in the array
}   

//for of loop
console.log("===================================for of loop==================================");
for (let browser of myAllBrowsers) {
    
    console.log(browser); // Output: each browser in the array
   if (browser === 'safari') {
        console.log("Srun it in hadless mode");
        break; // Exit the loop if 'safari' is found
    }   
}

//foreach loop
console.log("===================================forEach loop==================================");
myAllBrowsers.forEach(function(myAllBrowsers) {
    console.log(myAllBrowsers); // Output: each browser in the array
});

//reverse order of the array
console.log("===================================Reverse order of the array==================================");
let employees= ['John', 'Jane', 'Doe', 'Smith'];
for(let i=employees.length - 1; i >= 0; i--) {
    console.log(employees[i]); // Output: each employee in reverse order
}

//reverse order of the array using for of loop
console.log("===================================Reverse order of the array using for of loop==================================");
let emp= ['Aayush', 'Dexter', 'Deb', 'Ronnit'];
let reversedEmployees = [];
for (let employee of emp) {
    reversedEmployees.unshift(employee); // Adds each employee to the beginning of the new array
}
console.log(reversedEmployees); // Output: ['Smith', 'Doe', 'Jane', 'John'] (employees in reverse order)

//for in loop
console.log("===================================for in loop==================================");
userData = ['ayush', 'rahul', 'sachin', 'rohit'];
for (let index in userData) {
    console.log(`Index: ${index}, Value: ${userData[index]}`); // Output: each index and corresponding value in the array
}



  
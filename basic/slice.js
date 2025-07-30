//slice - portion of the array
let number = [1,2,3,4,5,6,7];
let slicedArray = number.slice(2, 5); // Extracts elements from index 2 to index 5 (not including index 5)
console.log(slicedArray); // Output: [3, 4, 5]


//get last 3 elements of the array
let lastThreeElements = number.slice(-3); // Extracts the last 3 elements of the array
console.log(lastThreeElements); // Output: [5, 6, 7]

//if we give beond the 7 elements of the array
let beyondTheLimit = number .slice(-10); // If we try to slice beyond the array length, it returns an empty array
console.log(beyondTheLimit); // Output: []
//Splice : add and remove elements from an array
//array.splice(start, deleteCount, item1, item2, ...)
let cart = ['apple', 'banana', 'orange', 'grape' , 'kiwi'];
let removed = cart.splice(2,1)    // Removes 1 element starting from index 2 (removes 'orange')   
console.log(removed); // Output: ['orange'] (the removed element)
console.log(cart); // Output: ['apple', 'banana', 'grape', 'kiwi']

//remove 3 element starting from index 2
cart.splice(2,3); // Removes 3 elements starting from index 2 (removes 'grape', 'kiwi')
console.log(cart); // Output: ['apple', 'banana']

//
cart.splice(2,0); // Adds no elements at index 2 (does not remove anything)
console.log(cart); // Output: ['apple', 'banana']

let cart2 = ['apple2', 'banana2', 'orange2', 'grape2' , 'kiwi2', 'mango2',    'peach2'];
cart2.splice(-2,2); // Removes the last 2 elements ('mango', 'peach')
console.log(cart2); // Output: ['apple', 'banana', 'orange', 'grape', 'kiwi']


//add 2 elements at index 2
let cart3 = ['apple3', 'banana3', 'orange3', 'grape3' , 'kiwi3'];
cart3.splice(1, 0, 'strawberry')
console.log(cart3)            
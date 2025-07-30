let  user ={
    name: 'Aayush',
    city: 'LA'
};


let person = {...user}
console.log(person);
console.log(user);

// person is now { name: 'Aayush', city: 'LA' }
user.name = 'John';
console.log(person); // person remains unchanged: { name: 'Aayush', city:
console.log(user);
let user ={
    name: 'pradeep',
    age: 30,
    status: 'active',
    isActive:true
}

let PrintKeys = Object.keys(user);
console.log(PrintKeys);
console.log(PrintKeys.length);


let Printvalues = Object.values(user);
console.log(Printvalues);
console.log(Printvalues.length);

let Printpair = Object.entries(user);
console.log(Printpair);
console.log(Printpair.length);

//print the key in the basis of value
for (let e in user){
    console.log(e + ':' + user[e]);
}

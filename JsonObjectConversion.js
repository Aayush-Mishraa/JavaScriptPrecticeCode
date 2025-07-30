let person={
    name: "John",
    age: 30,
    city: "New York",
    country: "USA",
    isActive: true,
    status: "single",

}
console.log(typeof person);

//js object to json string: Marshalling
let persionJson =JSON.stringify(person);
console.log(persionJson);
console.log(typeof persionJson);
//json string to js object: Unmarshalling
let personObj = JSON.parse(persionJson);
console.log(personObj);
console.log(typeof personObj);








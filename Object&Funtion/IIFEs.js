//IIFE (Immediately Invoked Function Expression) - ananoymous function 


//This doest support function expression
//but i can return somtiong form IIFE
//We have to store in a variable if we return something from IIFE


(function () {
    console.log("This is an IIFE");
})(); // This is an IIFE\\\\


(function(name){
    // Function with parameters and return value
    console.log('Start the servername: ' + name);
})('Tomcat Server'); // Start the servername: Tomcat Server


(function(empName){

    console.log('Employee Name is : ' + empName);
    return empName.toUpperCase();
})('John Doe');




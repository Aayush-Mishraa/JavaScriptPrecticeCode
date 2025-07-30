//named function: Means a reusable code /factory function

//simple function : has no input and no return
function test(){//Just declaration of function`  
    //0 perametrized function
    //function body
    console.log("Hello World");
}
test(); // calling the function

function sum(){//has no input and no return
    //0 perametrized function
    //function body
    let a = 10;
    let b = 20;
    let c = a + b;
    console.log("Sum is: " + c);
}

sum(); // calling the function

rest(); //we can host the function before calling it then creating the function
//this is called hoisting
//hoisting means we can call the function before creating it
//interview question: what is hoisting in js?
//hoisting is a feature in js where we can call the function before creating it 
function rest(){
    console.log("Rest Function");
}


//2 function: some input and no return
function add(a, b){ //has input and no return
    //1 perametrized function
    //function body
    console.log("Adding two numbers");
    let c = a + b;
    console.log("Addition is: " + c);
}
add(10, 20); //Call by arguments
// calling the function with input 10 and 20 are the arguments
//a and b are the parameters
//parameters are the variables we define in the function declaration
//arguments are the values we pass to the function when we call it
//interview question: what is the difference between parameters and arguments?
//parameters are the variables we define in the function declaration
//arguments are the values we pass to the function when we call it  

/**
 * 
 * @param {String} name 
 */
function getTrainerName( name){
    console.log("Trainer Name is: " + name);
    name.toUpperCase(); // this will not change the original name variable
    console.log("Trainer Name in Upper Case: " + name.toUpperCase());
}
getTrainerName("John Doe");// calling the function with input "John Doe"


//3 function: some input and some return
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function multiply(a, b){ //has input and has return
    //2 perametrized function
    //function body
    console.log("Multiplying two numbers");
    let c = a * b;
    return c; //returning the value of c
}

let result = multiply(10, 20); // calling the function with input 10 and 20
console.log("Result is: " + result);


//Acceptance Craiteria
//create a funtion which will take param
//param : browser : chrome, firefox, safari
//return: true or false
//true if the browser is available , false if not
/**
 * 
 * @param {String} browser 
 */
function launchBrowser(browser){
    console.log('browser name is: ' + browser);
    switch(browser.trim().toLowerCase()){
        case 'chrome':
            console.log("Chrome is available");
            return true;
        case 'firefox':
            console.log("Firefox is available");
            return true;
        case 'safari':
            console.log("Safari is available");
            return true;
        default:
            console.log("Browser not available");
            return false;
    }

}

launchBrowser('chrome');
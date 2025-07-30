let browser = 'safari';

switch (browser) {
    case 'chrome':
        console.log("You are using Chrome");
        break;
case 'firefox':
        console.log("You are using Firefox");
        break;  
default:
        console.log("Plz pass the right browser");        
        break;
case 'edge':                    
        console.log("You are using Edge");
        break;          
case 'safari':
        console.log('Plz pass the right browser'+ browser);  
        break;  

case 'opera':
        console.log("You are using Opera");
        break;  
    case 'safari':       
    console.log("You are using Brave");
    break;
}

let marks = 100;
switch (marks) {
    case 90:
       console.log('hi');
        break;
    case 100:
        console.log('hello');
        break;
    default:
        console.log('default case executed');   }//in this case wi dont preffer to use switch case because we are not checking the value of marks against multiple discrete values.


        
// The switch statement is used to execute different code blocks based on the value of a variable or expression.
// It is an alternative to using multiple if-else statements when you have a variable that can take on multiple discrete values.
// The switch statement evaluates an expression and matches the result against a series of case clauses.

// The switch statement is used to execute different code blocks based on the value of a variable or expression.LET MA

// Note: The order of cases matters. The first matching case will be executed.
// If no case matches, the default case will be executed if it exists.
// If a case is not followed by a break statement, the code will continue to execute into the next case (fall-through behavior).
// The break statement is used to exit the switch block after executing a case.
// If you want to execute multiple cases with the same code, you can group them together without a break in between.
// Example of fall-through behavior
// switch (value) {
//     case 1:  
//         console.log("Value is 1");
//     case 2:

//         console.log("Value is 2");
//         break;
//     case 3:



//         console.log("Value is 3");
//         break;
//     default: 
//         console.log("Value is something else");
//         break;       
// }

// In this example, if value is 1, it will print "Value is 1" and "Value is 2" because there is no break after case 1.
// If value is 2, it will print "Value is 2" and then break.
// If value is 3, it will print "Value is 3" and then break.


// If value is something else, it will print "Value is something else". 

// This behavior can be useful in certain scenarios, but it can also lead to unexpected results if not used carefully.
// To avoid fall-through behavior, always use a break statement at the end of each case unless you intentionally want to execute multiple cases.
// In this example, the switch statement checks the value of the variable `browser` and executes the corresponding case.
// If the value of `browser` matches one of the cases, it will execute the code block for that case.
// If no case matches, it will execute the default case if it exists.   

// The break statement is used to exit the switch block after executing a case.
// If you want to execute multiple cases with the same code, you can group them together without        
// a break in between.
// The order of cases matters, and the first matching case will be executed.    

// If you want to handle multiple cases with the same code, you can group them together without a break in between.
// Example of grouping cases
// switch (value) {     
//     case 1:
//     case 2:      
//         console.log("Value is either 1 or 2");
//         break;                   
//     case 3:
//         console.log("Value is 3");               
//         break;                               
//     default:






//         console.log("Value is something else");
//         break;           

// }
// In this example, if value is 1 or 2, it will print "Value is either 1 or 2".                 
// If value is 3, it will print "Value is 3".
// If value is something else, it will print "Value is something else".
// This allows you to handle multiple cases with the same code without duplicating it.
// Note: The order of cases matters. The first matching case will be executed.
// If no case matches, the default case will be executed if it exists.

// If a case is not followed by a break statement, the code will continue to execute into the next case (fall-through behavior).
// The break statement is used to exit the switch block after executing a case.
// If you want to execute multiple cases with the same code, you can group them together without a break in between.
// Example of fall-through behavior
// switch (value) {
//     case 1:      
//         console.log("Value is 1");
//     case 2:
//         console.log("Value is 2");
//         break;       
//     case 3:
//         console.log("Value is 3");   
//         break;       
//     default:         
//         console.log("Value is something else");  

//         break;       
// }                
// In this example, if value is 1, it will print "Value is 1" and "Value is 2" because there is no break after case 1.
// If value is 2, it will print "Value is 2" and then break.
// If value is 3, it will print "Value is 3" and then break.

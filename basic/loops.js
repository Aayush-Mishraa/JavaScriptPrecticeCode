let i = 1;
while (i <= 10) {
    console.log(i);
    ++i
    
}


console.log("===================================While Loop with Increment==================================");
let j = 1;
while (j <= 10) {
  
       console.log(j);
    if(j===5){
        console.log("BYE");
        break; // Exits the loop when j is 5
    }
    j++;
   
}

console.log("===================================While Loop with Decrement==================================");
//  let k = 10;                     
// while (k >= 1) {
//     console.log(k);
//     --k;
// }      

console.log("===================================fOR LOOP=================================");

for (let l = 1; l <= 10; l++) {
    console.log(l);
}


// ✅ Use Cases for while Loop
// (When number of iterations is not fixed)

// Wait for the WebElement:
// e.g. Retry every 5s → 0, 5, 10, 20, 25 until element is visible/clickable

// Wait for Page Load:
// Retry until DOM is stable or expected element appears

// Web Table Pagination:
// Keep clicking "Next" until the button is disabled or last page is reached

// Infinite Page Scrolling:
// Scroll until no new elements are loaded

// Count Total Number of Links/Elements on a Page
// (Could vary: e.g., 30, 40, 100, depending on content loaded dynamically)

// Calendar Handling:
// Click next month until desired month/year is visible

// Carousel Handling:
// Scroll or click until the desired banner/image appears

// Get Data from DB Table Dynamically:
// Fetch until no more rows are returned

// ✅ Additional Use Cases:
// Retry API Until Success or Timeout
// Repeatedly hit an API until it returns 200 OK or after n tries

// Dynamic Dropdown Handling
// Keep checking until all dependent dropdown options are loaded

// Capturing Dynamic Toast Messages/Alerts
// Wait until a success/failure alert is visible and dismiss it

// ✅ Use Cases for for Loop
// (When number of iterations is fixed)

// Dropdown with Fixed Values:
// e.g. Months, Years, Countries – loop through known options

// Excel/CSV Rows:
// Loop from 1 to 10 or however many rows exist (if known)

// Array/List:
// e.g., Loop through list indices 0 to 4 for a 5-element list

// Flight/Movie/Bus Seat Booking:
// Iterate seat numbers 0 to 119 for 120 seats

// Menu Items / Categories:
// Fixed number of navigation tabs or sections

// ✅ Additional Use Cases:
// Upload/Download Multiple Files
// Loop through a list of file names and perform upload/download

// Validating Multiple Web Elements on a Page
// (e.g. menu items, icons, links – if the count is known)

// Loop Through Browser Tabs
// for (int i = 0; i < driver.getWindowHandles().size(); i++)

// Running Test Cases in Batch (Fixed Count)
// Execute 20 test scripts from an array of test case names

// Form Field Validations
// Loop through a known set of input fields for validation testing

// ✅ Use Cases for do-while Loop
// (When the task must be executed at least once before checking the condition)

// Login Retry Once Before Exit

// Try logging in once. If it fails, prompt for retry until successful or max retries reached.

// Polling for OTP/Email

// Fetch the OTP/email at least once, then continue polling until the OTP is received or timeout.

// Scroll Down & Check for Element

// Scroll down once and then keep scrolling until the desired element is visible.

// Page Load Spinner Wait

// Check for spinner visibility once, then keep checking until it disappears.

// Check for Pop-Up or Modal

// Open a section that might show a pop-up once, and repeat check until it disappears or a condition is met.

// Retry File Upload Until Success

// Upload once, and if it fails, retry again until file is successfully uploaded or attempts exceed limit.

// Database Polling for Status Update

// Query the DB once to check job status, and if it's still "Pending", repeat until status is "Completed".

// Check for Alert Message

// Perform an action that triggers a toast/alert once, and keep checking until the message appears.

// Browser/Tab Close Confirmation

// Click close, confirm once, and repeat handling if more confirmation dialogs appear.

// Initial Setup/Configuration Screens

// Fill setup wizard (shown only once), then loop through steps till setup is complete.
//nested if statements example if - if if - else if - else 

let marks = 100;

// This code checks the marks and assigns a grade based on the value of marks``

if (marks >= 90) {
    console.log("Grade A");
    if (marks >= 95) {
        console.log("Excellent");

        if (marks === 100) {
            console.log("Perfect Score elegible for bonus scollarship");
        }
    }
} else {
    if (marks >= 80) {
        console.log("Grade B");
    } else if (marks >= 70) {
        console.log("Grade C");
    } else if (marks >= 60) {
        console.log("Grade D");
    } else if (marks >= 50) {
        console.log("Grade E");
    } else {
        console.log("Grade F");
    }
}
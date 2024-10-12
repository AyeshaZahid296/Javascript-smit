// ..........CHAPTER : 06 - 09.................

// Question :1
// var a = 10;
//     document.write("Result:"+ "<br>");
//     document.write("The value of a is: " + a + "<br>");
//     document.write("------------------------------------------------------<br>");

//     document.write("The value of ++a is: " + (++a) + "<br>");
//     document.write("Now the value of a is: " + a + "<br><br>");

//     document.write("The value of a++ is: " + (a++) + "<br>");
//     document.write("Now the value of a is: " + a + "<br><br>");

//     document.write("The value of --a is: " + (--a) + "<br>");
//     document.write("Now the value of a is: " + a + "<br><br>");

//     document.write("The value of a-- is: " + (a--) + "<br>");
//     document.write("Now the value of a is: " + a + "<br>");

// Question :2
// var a = 2, b = 1;
// document.write("a is : " + a);
// document.write("b is : " + b);
// var result = --a - --b + ++b + b--;
// document.write("Result is : " + result);

// .........Explination.......
// when: --a
// a is decremented first, so a becomes 1
// Now the value of a = 1, b = 1

// When: --a - --b
// a is already 1, so no further change. Now b is decremented to 0.
// result = 1 - 0 = 1
// Now the value of a = 1, b = 0

// When: --a - --b + ++b
// b is incremented back to 1 before the operation.
// result = 1 - 0 + 1 = 2
// Now the value of a = 1, b = 1

// When: --a - --b + ++b + b--
// b is used first (which is 1) and then decremented to 0 after the operation.
// result = 1 - 0 + 1 + 1 = 3
// Now the value of a = 1, b = 0

// Final values: a = 1, b = 0, result = 3

// Question :3
//  var userName = prompt("Enter your name:");
// document.write("Hello, " + userName + "! Welcome!");
    
// Question :5
// let number = prompt("Enter a number for multiplication table", 5);
//     number = parseInt(number);

//     document.write("<h3>Multiplication Table of " + number + "</h3>");
    
//     for (let i = 1; i <= 10; i++) {
//         document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }
    
//Question :6
    // let subject1 = prompt("Enter the name of first subject:");
    // let subject2 = prompt("Enter the name of second subject:");
    // let subject3 = prompt("Enter the name of third subject:");
    
    // let totalMarks = 100;

    // let marks1 = parseInt(prompt("Enter obtained marks for " + subject1));
    // let marks2 = parseInt(prompt("Enter obtained marks for " + subject2));
    // let marks3 = parseInt(prompt("Enter obtained marks for " + subject3));

    // let totalObtained = marks1 + marks2 + marks3;
    // let percentage = (totalObtained / (totalMarks * 3)) * 100;

    // document.write("<h3>Result:</h3>");
    // document.write("<table border='1'>");
    // document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
    // document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td><td>" + (marks1 / totalMarks * 100) + "%</td></tr>");
    // document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td><td>" + (marks2 / totalMarks * 100) + "%</td></tr>");
    // document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td><td>" + (marks3 / totalMarks * 100) + "%</td></tr>");
    // document.write("<tr><td>Total</td><td>" + (totalMarks * 3) + "</td><td>" + totalObtained + "</td><td>" + percentage.toFixed(2) + "%</td></tr>");
    // document.write("</table>");

// ..........CHAPTER : 09 - 11.................

// Question :1
// let city = prompt("Enter your city name:");
// if (city === "Karachi") {
//     alert("Welcome to the city of lights");
// }

// // Question :2
// let gender = prompt("Enter your gender (male/female):");
// if (gender === "male") {
//     alert("Good Morning Sir");
// } else if (gender === "female") {
//     alert("Good Morning Ma’am");
// }

// // Question :3
// let signalColor = prompt("Enter the color of the traffic signal (Red, Yellow, Green):");
// if (signalColor.toLowerCase() === "red") {
//     alert("Must Stop");
// }
// else if (signalColor.toLowerCase() === "yellow") {
//     alert("Ready to move");
// }
// else if (signalColor.toLowerCase() === "green") {
//     alert("Move now");
// }
// else {
//     alert("invalid input");
// }

// // Question :4
// let fuel = parseFloat(prompt("Enter remaining fuel in your car (in litres):"));
// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }
// else {
//     alert("No need to refill");
// }

// // Question :5
// // ::::(part a )::::
// let a = 4;
// if (++a === 5) {
//     alert("Given condition for variable a is true");
// }
// // Alert is displayed .

// // ::::(part b )::::
// let b = 82;
// if (b++ === 83) {
//     alert("Given condition for variable b is true");
// }
// // No alert is not displayed .

// // ::::(part c )::::
// let c = 12;
// if (c++ === 13) {
//     alert("Condition 1 is true");
// }
// if (c === 13) {
//     alert("Condition 2 is true");
// }
// if (++c < 14) {
//     alert("Condition 3 is true");
// }
// if (c === 14) {
//     alert("Condition 4 is true");
// }
// // Alert is displayed (Because condition 2 and 4 is true) .

// // ::::(part d )::::
// let materialCost = 20000;
// let laborCost = 2000;
// let totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// // Alert is displayed .

// // ::::(part e )::::
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
// // Alert is displayed (because first condition is true ).


// // ::::(part f )::::
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }
// // Alert is displayed

// // Question :6
// let subject1Marks = parseInt(prompt("Enter marks obtained in first subject:"));
// let subject2Marks = parseInt(prompt("Enter marks obtained in second subject:"));
// let subject3Marks = parseInt(prompt("Enter marks obtained in third subject:"));
// let totalMarks = 300;
// let obtainedMarks = subject1Marks + subject2Marks + subject3Marks;
// let percentage = (obtainedMarks / totalMarks) * 100;

// let grade, remarks;
// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// } else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// } else {
//     grade = "Fail";
//     remarks = "Sorry";
// }
// document.write("<h1>Marks Sheet</h1>");
// document.write("Total marks: " + totalMarks + "<br>");
// document.write("Marks obtained: " + obtainedMarks + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
// document.write("Grade: " + grade + "<br>");
// document.write("Remarks: " + remarks + "<br>");

// // Question :7
// let secretNumber = 7; 
// let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// if (userGuess === secretNumber) {
//     alert("Wow! You guess the correct answer");
// } else if (userGuess + 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Try again!");
// }

// // Question :8
// let number = parseInt(prompt("Enter a number:"));
// if (number % 3 === 0) {
//     alert("The number is divisible by 3");
// } else {
//     alert("The number is not divisible by 3");
// }

// // Question :9
// let number = parseInt(prompt("Enter a number:"));
// if (number % 2 === 0) {
//     alert("The number is even");
// } else {
//     alert("The number is odd");
// }

// // Question :10
// let temperature = parseInt(prompt("Enter the temperature:"));
// if (temperature > 40) {
//     alert("It is too hot outside.");
// } else if (temperature > 30) {
//     alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//     alert("Today's Weather is cool.");
// } else if (temperature > 10) {
//     alert("Ya Allah! Today’s weather is so Cool.");
// }

// // Question :11
// let num1 = parseFloat(prompt("Enter first number:"));
// let num2 = parseFloat(prompt("Enter second number:"));
// let operation = prompt("Enter operation (+, -, *, /, %):");
// let result;

// if (operation === "+") {
//     result = num1 + num2;
// } else if (operation === "-") {
//     result = num1 - num2;
// } else if (operation === "*") {
//     result = num1 * num2;
// } else if (operation === "/") {
//     result = num1 / num2;
// } else if (operation === "%") {
//     result = num1 % num2;
// } else {
//     alert("Invalid operation");
// }
// if (result !== undefined) {
//     alert("The result is: " + result);
// }


// ..........CHAPTER : 06.................

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
    let subject1 = prompt("Enter the name of first subject:");
    let subject2 = prompt("Enter the name of second subject:");
    let subject3 = prompt("Enter the name of third subject:");
    
    let totalMarks = 100;

    let marks1 = parseInt(prompt("Enter obtained marks for " + subject1));
    let marks2 = parseInt(prompt("Enter obtained marks for " + subject2));
    let marks3 = parseInt(prompt("Enter obtained marks for " + subject3));

    let totalObtained = marks1 + marks2 + marks3;
    let percentage = (totalObtained / (totalMarks * 3)) * 100;

    document.write("<h3>Result:</h3>");
    document.write("<table border='1'>");
    document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
    document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td><td>" + (marks1 / totalMarks * 100) + "%</td></tr>");
    document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td><td>" + (marks2 / totalMarks * 100) + "%</td></tr>");
    document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td><td>" + (marks3 / totalMarks * 100) + "%</td></tr>");
    document.write("<tr><td>Total</td><td>" + (totalMarks * 3) + "</td><td>" + totalObtained + "</td><td>" + percentage.toFixed(2) + "%</td></tr>");
    document.write("</table>");


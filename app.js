// ..........CHAPTER : 01.................

// Question :1
// alert("Welcome to our website");

// Question :2
// alert("Error! Please enter a valid password");

// Question :3
// alert("Welcome to JS Land..."+ "\n" +"Happy Coding!");

// Question :4
// alert("Welcome to JS Land...");
// alert("Happy Coding!" + "\n" + "Prevent this page from creating additional dialogs.");


// ..........CHAPTER : 02.................

// Question :1
// let = username;

// Question :2
// let myName;
// myName = "Ayesha Zahid";

// Question :3
// let message;
// message = "Hello World";
// alert(message);

// Question :4
// let stdName = "Noor Fatima";
// let stdAge = "19 year old";
// let field = "Mobile Application Development";
// alert(stdName);
// alert(stdAge);
// alert(field);

// Question :5
// alert("PIZZA"+"\n" + "PIZZ"+"\n" +"PIZ"+"\n" +"PI"+"\n" +"P");

// Question :5
// let email;
// email = "example@example.com";
// alert("My email address is " + email);

// Question :6
// let book;
// book = "A smarter way to learn JavaScripte@example.com";
// alert("I am trying to learn from the Book " + book);

// Question :7
// let message = "Yeah! I can write HTML content through JavaScript";
// document.write(message);

// Question :8
// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");


// ..........CHAPTER : 03.................

// Question :1
// let = age;
// age = "I am 19 year old";

// Question :2
//  var visitCount = localStorage.getItem('visitCount');
//         if (visitCount === null) {
//             visitCount = 0;
//         }
//         visitCount++;
//         localStorage.setItem('visitCount', visitCount);
//         alert("You have visited this site " + visitCount + " times.");

// Question :3
// let birthYear;
// birthYear = "My birth year is 2005"+ "<br>";
// document.write(birthYear);
// document.write( "DataType of my declared is number" );

// Question :4
// let visitorName = "John Doe";
// let productTitle = "T-shirt";
// let quantity = 5;
// document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.");


// ..........CHAPTER : 04.................

// Question :1
// let a = 1, b = 2, c = 3;

// Question :2
//             Legal Variable are:
// let myName;
// let _myName;
// let num1;
// let $money;
// let myNum2;

//              Illegal Variable are:
// let 2ndnum;
// let my-name;
// let my name;
// let function :
// let %marks;

// Question :3
//  document.getElementById('rules').innerHTML = `
//             <p>Variable names can only contain numbers, $ and _ . For example, $my_1stVariable.</p>
//             <p>Variables must begin with a letter, $ or _ . For example, $name , _name or name.</p>
//             <p>Variable names are case sensitive.</p>
//             <p>Variable names should not be JS keywords </p>`;


            // ..........CHAPTER : 05.................

// Question :1
// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));
// document.write(`<p>Sum of <b>${num1}</b> and <b>${num2}</b> is <b>${num1 + num2}</b></p>`);


// Question 2
// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));
// document.write(`<p>Sum of <b>${num1}</b> and <b>${num2}</b> is <b>${num1 + num2}</b></p>`);
// document.write(`<p>Difference of <b>${num1}</b> and <b>${num2}</b> is <b>${num1 - num2}</b></p>`);
// document.write(`<p>Product of <b>${num1}</b> and <b>${num2}</b> is <b>${num1 * num2}</b></p>`);
// document.write(`<p>Division of <b>${num1}</b> by <b>${num2}</b> is <b>${num1 / num2}</b></p>`);
// document.write(`<p>Modulus of <b>${num1}</b> and <b>${num2}</b> is <b>${num1 % num2}</b></p>`);


// Question 3:
// let my_variable;
// document.write(`<p>Value after variable declaration is: <b>${my_variable}</b></p>`);
// my_variable = 5;
// document.write(`<p>Initial value: <b>${my_variable}</b></p>`);
// my_variable++;
// document.write(`<p>Value after increment is: <b>${my_variable}</b></p>`);
// my_variable += 7;
// document.write(`<p>Value after addition is: <b>${my_variable}</b></p>`);
// my_variable--;
// document.write(`<p>Value after decrement is: <b>${my_variable}</b></p>`);
// document.write(`<p>The remainder when divided by 3 is: <b>${my_variable % 3}</b></p>`);


// Question 4:
// let ticket_price = 600;
// document.write(`<p>Total cost to buy 5 movie tickets is: <b>${ticket_price * 5}</b> PKR</p>`);


// Question  5:
// let num = +(prompt("Enter a number for table: "))
// document.write(`<h4> Table of ${num} </h4>`)
// for (let i = 1; i <= 10; i++) {
//     document.write(`${num} x ${i} = ${num * i} <br>`);
// }


// Question 6:
// let celsius = 25;
// let fahrenheit = 70;
// document.write(`${celsius} <sup>o</sup>C is  ${(celsius * 1.8) + 32} <sup>o</sup>F <br>`);
// document.write(`${fahrenheit} <sup>o</sup>F is  ${(fahrenheit - 32) * 5 / 9} <sup>o</sup>C <br>`);




// Question 7:
// document.write(`<h1> Shopping Cart: </h1>`)
// let item1 = 650, item2 = 100;
// let q1 = 3
// let q2 = 5
// document.write(`Price of item1     : PKR ${item1} <br>`);
// document.write(`Qunatity of item1  : PKR ${q1} <br>`);
// document.write(`Price of item2 : PKR ${item2} <br>`);
// document.write(`Qunatity of item2 : PKR ${q2} <br><br>`);
// document.write(`Shipping Charges : PKR 100`);
// let total = item1 * q1 + item2 * q2 + 100;
// document.write(`Total cost of your order : PKR ${total}`);




// Question 8:
// document.write(`<h1> Marks Sheet: </h1>`);
// total_marks = 1100, marks_obtained = 990;
// document.write(`Total marks : ${total_marks} <br>`);
// document.write(`Marks Obtained :  ${marks_obtained} <br><br>`);
// document.write(`Percentage : ${(marks_obtained * 100) / total_marks} `);


// Question 9:

// document.write(`<h1> Currency in PKR: </h1>`);
// let pkr = (10 * 104.80) + (25 * 28)
// document.write(`Total Currency in PKR =  ${pkr} <br>`);

// Question 10:

// let my_num = 10;
// document.write(`Initial value  : ${my_num} <br>`);
// document.write(`Value + 5 :  ${my_num += 5} <br>`);
// document.write(`Value x 10  : ${my_num *= 10}<br> `);
// document.write(`Value / 12  : ${my_num /= 2} <br>`);

// Question 11:

// document.write(`<h1> Age Calculator: </h1>`);
// let year_now = new Date().getFullYear();
// let birth_year = +(prompt("Enter your birth year:"));
// document.write(`Current year =  ${year_now} <br>`);
// document.write(`Birth year =  ${birth_year} <br>`);
// document.write(`Your age =  ${year_now - birth_year} <br>`);


// Question 12:

// document.write(`<h1> The Geometrizer: </h1>`);
// let radius = +(prompt("Enter the radius of the circle:"));
// document.write(`The radius is: ${radius} <br>`);
// document.write(`The circumference is: ${2 * 3.142 * radius} <br>`);
// document.write(`The area is: ${3.142 * radius * radius} <br>`);

// Question 13:

// let favorite_snack = prompt("Enter your favorite snack:");
// let current_age = +(prompt("Enter your current age:"));
// let max_age = +(prompt("Enter the maximum age:"));
// let amount_per_day = +(prompt("Enter the estimated amount of snacks you eat per day:"));
// let years_remaining = max_age - current_age;
// let total_snacks = years_remaining * 365 * amount_per_day;
// document.write(`<h1> Lifetime Supply Calculator: </h1>`);
// document.write(`Favourite Snack: ${favorite_snack} <br>`);
// document.write(`Current age: ${current_age} <br>`);
// document.write(`Estimated Maximum Age: ${max_age} <br>`);
// document.write(`Amount of snacks per day: ${amount_per_day}<br> `);
// document.write(`You will need ${totalSnacks} ${favorite_snack}(s) to last you until the ripe old age of ${max_age}.`);

// Question 1

var userInput = prompt("Enter the name of your city?");

if(userInput.toLowerCase() === "karachi") {
    console.log("Welcome to city of lights");
}
else {
    console.log(userInput,"is the good city.")
}

// Question 2

var userInput = prompt("Enter your Gender?");

if (userInput.toLowerCase() === "male") {
  console.log("Good Morning Sir.");
} else if (userInput.toLowerCase() === "female") {
  console.log("Good Morning Ma'am.");
} else {
  console.log("Good Morning.");
}

// Question 3

var userInput = prompt("Enter the color of trafic signal?");

if (userInput.toLowerCase() === "red") {
  console.log("Must Stop!");
} else if (userInput.toLowerCase() === "yellow") {
  console.log("Ready to move");
} else if (userInput.toLowerCase() === "green") {
  console.log("Move now");
} else {
  console.log(userInput, "is not the trafic signal");
}

// Question 4

var userInput = Number(prompt("Enter the remaining fuel of your car?"));

if (userInput <= 0.25) {
  console.log("Please refill the fuel in your car”");
} else {
  console.log(userInput+" Litres "+ "You don't need to refill the fuel in your car");
}

// Question 5

var a = 4;

if (++a === 5) {
  alert("given condition for variable a is true");
}

var b = 82;

if (b++ === 83) {
  alert("given condition for variable b is false");
}

var c = 12;

if (c++ === 13) {
  alert("condition 1 is false");
} else {
  alert("condition 1 is false");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is false");
} else {
  alert("condition 3 is false");
}
if (c === 14) {
  alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
  alert("The cost is equals");
}
else {
  console.log("Cost is not equal");
}

if (true) {
  alert("True");
}

if (false) {
  alert("False");
}

if ("car" < "cat") {
  alert("car is smaller than cat");
}

// Question 6

var totalMarks = Number(prompt("Enter the total marks"));
var subject1 = Number(prompt("Enter the Math Score!"));
var subject2 = Number(prompt("Enter the Computer Science Score!"));
var subject3 = Number(prompt("Enter the English Score!"));
var obtainedMarks = subject1 + subject2 + subject3;
var percentage = Math.round((obtainedMarks / totalMarks) * 100);

console.log("Marks Sheet");
console.log("Total Marks :", totalMarks);
console.log("Marks Obtained :", obtainedMarks);
console.log("Percentage :", percentage + "%");

if (percentage >= 80) {
  console.log("Grade : A-one");
  console.log("Remarks : Excellent");
} else if (percentage >= 70) {
  console.log("Grade : A");
  console.log("Remarks : Good");
} else if (percentage >= 60) {
  console.log("Grade : B");
  console.log("Remarks : You need to improve");
} else {
  console.log("Fail");
  console.log("Sorry");
}

// Question 7

var randomNum = Math.random();
var randomNumGuess = Math.round(randomNum * 9 + 1);
var guessNum = Number(prompt("Enter your number."));

if (randomNumGuess === guessNum) {
  console.log("Bingo! Correct answer");
} else if (randomNumGuess === guessNum + 1 || randomNumGuess === guessNum - 1) {
  console.log("Close enough to the correct answer.");
} else {
  console.log("Failed to guess.");
}

// Question 8

var userNum = Number(prompt("Enter your number"));

if (userNum % 3 === 0) {
  console.log(userNum, "is divisible by 3");
} else {
  console.log("Sorry " + userNum + " is not divisible by 3");
}

// Question 9

var userNum = Number(prompt("Enter your number"));

if (userNum % 2 === 0) {
  console.log(userNum, "is a Even Num");
} else {
  console.log("Sorry " + userNum + " is a Odd Num");
}

// Question 10

var userTemp = Number(prompt("Enter your Temperature?"));

if (userTemp > 40) {
  console.log(userTemp + "oC" + " It is too hot outside");
} else if (userTemp > 30) {
  console.log(userTemp + "oC" + " The Weather today is Normal.");
} else if (userTemp > 20) {
  console.log(userTemp + "oC" + " Today’s Weather is cool.");
} else {
  console.log(userTemp + "oC" + " OMG! Today’s weather is so Cool.");
}

// Question 11

var firstNum = Number(prompt("Enter your first number?"));
var operator = prompt("Enter your operator?");
var secondNum = Number(prompt("Enter your second number?"));

if (operator === "+") {
  console.log(firstNum + secondNum);
} else if (operator === "-") {
  console.log(firstNum - secondNum);
} else if (operator === "*") {
  console.log(firstNum * secondNum);
} else if (operator === "/") {
  console.log(firstNum / secondNum);
} else if (operator === "%") {
  console.log(firstNum % secondNum);
} else {
  console.log("Please enter the correct input");
}

// Question 12

var userInput = prompt("Enter the character to check number or string");
var ascii = userInput.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
  console.log(userInput + " is a number.");
} else if (ascii >= 65 && ascii <= 90) {
  console.log(userInput + " is an uppercase letter.");
} else if (ascii >= 97 && ascii <= 122) {
  console.log(userInput + " is a lowercase letter.");
} else {
  console.log("User Input is neither a number nor a letter.");
}

// Question 13

var inte1 = Number(prompt("Enter integer 1"));
var inte2 = Number(prompt("Enter integer 2"));

if (inte1 > inte2) {
  console.log("Inte " + inte1 + " is Larger");
} else if (inte2 > inte1) {
  console.log("Inte " + inte2 + " is Larger");
} else if (inte1 === inte2) {
  console.log("Inte " + inte1 + " and Inte " + inte2 + " is equal");
} else {
  console.log("Write the correct input!");
}

// Question 14

var userInput = Number(prompt("Enter number to check"));

if (userInput > 0) {
  console.log(userInput, "is a positive number");
} else if (userInput < 0) {
  console.log(userInput, "is a negative number");
} else if (userInput === 0) {
  console.log("User Input is", userInput);
}
else {
    console.log("Write the correct number!");
}

// Question 15

var userInput = prompt("Enter the letter to check vowel or consonant");
var returnBoolean;

if (
  userInput.toLowerCase() === "a" ||
  userInput === "e" ||
  userInput === "i" ||
  userInput === "o" ||
  userInput === "u"
) {
  console.log(userInput, "is vowel!");
  returnBoolean = true;
  console.log("Return Value is", returnBoolean);
} else if (Number(userInput) * Number(userInput)) {
  console.log(userInput, "is a number");
} else {
  console.log(userInput, "is a consonant");
  returnBoolean = false;
  console.log("Return Value is", returnBoolean);
}

// Question 16

var correctPass = "admin123";

var enterPass = prompt("Enter your password");

if (!enterPass) {
  console.log("Please enter your password");
} else if (enterPass === correctPass) {
  console.log(
    "Correct! The password you entered matches the original password"
  );
} else {
  console.log("Incorrect password");
}

// Question 17

var greeting;
var hour = 22;

if (hour < 18) {
  greeting = "Good day";
  alert(greeting)
} else {
  greeting = "Good evening";
  alert(greeting)
}

// Question 18

var userTime = Number(prompt("Enter your time 24 hours clock format"));

if (userTime >= 0 && userTime < 12) {
  console.log("Good morning!");
} else if (userTime >= 12 && userTime < 17) {
  console.log("Good afternoon!");
} else if (userTime >= 17 && userTime < 21) {
  console.log("Good evening!");
} else if (userTime >= 21 && userTime <= 2359) {
  console.log("Good night!");
} else {
  console.log("Invalid time entered!");
}
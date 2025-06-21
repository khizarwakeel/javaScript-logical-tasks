// Question 1

// let firstName = prompt("Enter your First Name");
// let lastName = prompt("Enter your Last Name");

// console.log(firstName + " " + lastName);

// Question 2

// let favMobile = prompt("Enter your favorite mobile phone");

// console.log("My Favorite mobile phone is:", favMobile);
// console.log("Length of string:", favMobile.length);

// Question 3

// var string = "Pakistani";

// console.log("String:", string);
// console.log("Index of 'n':", string.indexOf("n"));

// Question 4

// var greet = "Hello World";

// console.log("Greet:", greet);
// console.log("Index of 'l':", greet.lastIndexOf("l"));

// Question 5

// var string2 = "Pakistani";

// console.log("String:", string2);
// console.log("Character at index 3:", string2.charAt(3));

// Question 6

// let firstName = prompt("Enter your First Name");
// let lastName = prompt("Enter your Last Name");

// console.log(firstName.concat(" ", lastName));

// Question 7

// let city = "Hyderabad";
// let replacement = city.replace('Hyder','Islam');

// console.log(replacement);

// Question 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replaceMessage = message.replace(/and/g,"&");

// console.log(replaceMessage);

// Question 9

// var value = "472";
// console.log("Type:", typeof value);

// var valueToNum = Number(value);
// console.log("Type:", typeof valueToNum);

// Question 10

// var userInput = prompt("Enter your food");
// console.log("Uer input:", userInput);

// var userInputToUppercase = userInput.toUpperCase();
// console.log("Upper case:", userInputToUppercase);

// Question 11

// var userInput = "javascript";

// var userInputFirstLetter = userInput.slice(0, 1).toUpperCase();
// var userInputRestLetters = userInput.slice(1);
// var userInputCapitalized = userInputFirstLetter + userInputRestLetters;

// console.log("User Input:", userInput);
// console.log("Title Case:", userInputCapitalized);

// Question 12

// var num = 35.36;
// var numToString = num.toString();
// var altString = numToString.replace(".", '');

// console.log("Number:", num);
// console.log("Result:", altString);

// Question 13

// var username = prompt("Enter your username");
// var isValid = true

// for (var i = 0; i < username.length; i++) {
//     var charCode = username.charCodeAt(i);
//     if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//         console.log("Please enter a valid username:", username);
//         isValid = false
//         break
//     }
// }

// if (isValid) {
//     console.log("Your username:", username);
// }

// Question 14

// var userInputFood = prompt('Welcome Khizar Bakery What do you want to order?')
// var foodArray = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInputToLowercase = userInputFood.toLowerCase();
// var isAvailable = true;


// for (var i = 0; i < foodArray.length; i++) {
//     if (userInputFood === foodArray[i]) {
//         console.log(foodArray[i], "is available at index", foodArray.indexOf(userInputFood), "in our bakery");
//         isAvailable = false;
//         break;
//     }
// }

// if (isAvailable) {
//     console.log("We are Sorry.", userInputFood, "is not available in our bakery");
// }

// Question 15

var password = prompt("Enter your password");

// Check if the password meets the requirements
var hasAlphabet = false;
var hasNumber = false;

// Check if the password length is at least 6 characters long
if (password.length < 6) {
    console.log("Please enter a password with at least 6 characters.");
} 
// Check if the first character is a number
else if (!isNaN(password[0])) {
    console.log("Password should not start with a number.");
} 
// Check if the password contains at least one alphabet and one number
else {
    for (var i = 0; i < password.length; i++) {
        var charCode = password.charCodeAt(i);
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            hasAlphabet = true;
        } else if (charCode >= 48 && charCode <= 57) {
            hasNumber = true;
        }
        if (hasAlphabet && hasNumber) {
            break; // Break out of the loop if both conditions are met
        }
    }
    if (!hasAlphabet || !hasNumber) {
        console.log("Password should contain both alphabets and numbers.");
    } else {
        console.log("Password accepted.");
    }
}
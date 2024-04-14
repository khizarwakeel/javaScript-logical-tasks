// Question 1

// let multiArray = [[],[],[],[]]
// console.log("Array of Arrays",multiArray);

// Question 2

// let multiArray = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// console.log(multiArray[0]);
// console.log(multiArray[1]);
// console.log(multiArray[2]);

// Question 3

// for (var i = 1; i < 11; i++) {
//     console.log(i);
// }

// Question 4

// let userTable = Number(prompt("Enter your table number"));
// let tableStartLength = Number(prompt("Enter your table start length"));
// let tableEndLength = Number(prompt("Enter your table end length"));

// console.log("Multiplication table of", userTable, "Start length", tableStartLength, "End Length", tableEndLength);

// for (let i = tableStartLength; i <= tableEndLength; i++) {
//     console.log(userTable + " x " + i + " = " + userTable * i);
// }

// Question 5

// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for (let i = 0; i < fruits.length; i++) {
//     console.log("Element at index", i, "is", fruits[i]);
// }

// Question 6

// A. Counting

// let countingArr = []

// for (let i = 1; i <= 15; i++) {
//     countingArr.push(i)
// }


// console.log("Counting:", countingArr)
// document.write("Counting:", countingArr)


// B. Reverse Counting

// let reverseArray = [];

// for (let i = 10; i >= 1; i--) {
//     reverseArray.push(i)
// }

// console.log("Reverse counting:", reverseArray)
// document.write("Reverse counting:", reverseArray)

// C. Even

// let evenArray = []

// for (let i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         evenArray.push(i);
//     }
// }

// console.log("Even:", evenArray)
// document.write("Even:", evenArray)

// D. ODD

// let oddArray = []

// for (let i = 0; i <= 20; i++) {
//     if (i % 2 !== 0) {
//         oddArray.push(i);
//     }
// }

// console.log("Odd:", oddArray);
// document.write("Odd:", oddArray);

// E. Series

// let seriesArr = [];

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         seriesArr.push(i + "K");
//     }
// }

// console.log("Series:", seriesArr);
// document.write("Series:", seriesArr);


// Question 7

// let foods = ["Cake", "Apple Pie", "Cookie", "Chips", "Patties"];
// let isAvailable = false;
// let index;

// let userInput = prompt("Enter your Food!");
// let adjustUserInput = userInput.slice(0, 1).toUpperCase();
// let remainInput = userInput.slice(1);
// let userInputFinal = adjustUserInput + remainInput;

// for (let i = 0; i < foods.length; i++) {
//     if (userInputFinal === foods[i]) {
//         isAvailable = true;
//         index = i;
//         break
//     }
// }

// if (isAvailable) {
//     alert(userInputFinal + " is available at index " + index + " in our bakery.")
// }
// else {
//     alert(userInputFinal + " is not available in our bakery.")
// }

// Question 8

// let numberArray = [24, 53, 78, 91, 12];
// let largestNumber = numberArray[0];

// for (let i = 1; i < numberArray.length; i++) {
//     if (numberArray[i] > largestNumber) {
//         largestNumber = numberArray[i];
//     }
// }

// console.log("Array items:",numberArray);
// console.log("The largest number in the array is: " + largestNumber);

// Question 9

// let numberArray = [24, 53, 78, 2, 91, 12, 5, 1];
// let smallestNum = numberArray[0];

// for (let i = 1; i < numberArray.length; i++) {
//     console.log(smallestNum);
//     if (numberArray[i] < smallestNum) {
//         smallestNum = numberArray[i];
//         console.log(smallestNum);
//     }
// }

// console.log("Array items:", numberArray);
// console.log("The smallest number in the array is: " + smallestNum);

// Question 10

// let numberArray = []

// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         numberArray.push(i)
//     }
// }

// console.log(numberArray);
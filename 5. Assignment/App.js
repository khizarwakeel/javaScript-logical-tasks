// Question 1

let multiArray = [[],[],[],[]]
console.log("Array of Arrays",multiArray);

// Question 2

let multiArray1 = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
console.log(multiArray1[0]);
console.log(multiArray1[1]);
console.log(multiArray1[2]);

// Question 3

for (var i = 1; i < 11; i++) {
    console.log(i);
}

// Question 4

let userTable = Number(prompt("Enter your table number"));
let tableStartLength = Number(prompt("Enter your table start length"));
let tableEndLength = Number(prompt("Enter your table end length"));

console.log("Multiplication table of", userTable, "Start length", tableStartLength, "End Length", tableEndLength);

for (let i = tableStartLength; i <= tableEndLength; i++) {
    console.log(userTable + " x " + i + " = " + userTable * i);
}

// Question 5

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let i = 0; i < fruits.length; i++) {
    console.log("Element at index", i, "is", fruits[i]);
}

// Question 6

// A. Counting

let countingArr = []

for (let i = 1; i <= 15; i++) {
    countingArr.push(i)
}


console.log("Counting:", countingArr)
document.write("Counting:", countingArr)


// B. Reverse Counting

let reverseArray = [];

for (let i = 10; i >= 1; i--) {
    reverseArray.push(i)
}

console.log("Reverse counting:", reverseArray)
document.write("Reverse counting:", reverseArray)

// C. Even

let evenArray = []

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        evenArray.push(i);
    }
}

console.log("Even:", evenArray)
document.write("Even:", evenArray)

// D. ODD

let oddArray = []

for (let i = 0; i <= 20; i++) {
    if (i % 2 !== 0) {
        oddArray.push(i);
    }
}

console.log("Odd:", oddArray);
document.write("Odd:", oddArray);

// E. Series

let seriesArr = [];

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        seriesArr.push(i + "K");
    }
}

console.log("Series:", seriesArr);
document.write("Series:", seriesArr);


// Question 7

let foods = ["Cake", "Apple Pie", "Cookie", "Chips", "Patties"];
let isAvailable = false;
let index;

let userInput = prompt("Enter your Food!");
let adjustUserInput = userInput.slice(0, 1).toUpperCase();
let remainInput = userInput.slice(1);
let userInputFinal = adjustUserInput + remainInput;

for (let i = 0; i < foods.length; i++) {
    if (userInputFinal === foods[i]) {
        isAvailable = true;
        index = i;
        break
    }
}

if (isAvailable) {
    alert(userInputFinal + " is available at index " + index + " in our bakery.")
}
else {
    alert(userInputFinal + " is not available in our bakery.")
}

// Question 8

let numberArray1 = [24, 53, 78, 91, 12];
let largestNumber = numberArray1[0];

for (let i = 1; i < numberArray1.length; i++) {
    if (numberArray1[i] > largestNumber) {
        largestNumber = numberArray1[i];
    }
}

console.log("Array items:",numberArray1);
console.log("The largest number in the array is: " + largestNumber);

// Question 9

let numberArray2 = [24, 53, 78, 2, 91, 12, 5, 1];
let smallestNum = numberArray2[0];

for (let i = 1; i < numberArray2.length; i++) {
    console.log(smallestNum);
    if (numberArray2[i] < smallestNum) {
        smallestNum = numberArray2[i];
        console.log(smallestNum);
    }
}

console.log("Array items:", numberArray2);
console.log("The smallest number in the array is: " + smallestNum);

// Question 10

let numberArray3 = []

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        numberArray3.push(i)
    }
}

console.log(numberArray3);


// Others Question Solved <<<<======>>>>

// Question 1

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(j+" ");
  }
  document.write("<br />");
}

// Question 2

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write("* ");
  }
  document.write("<br />");
}

// Question 3

for (let i = 5; i >= 1; i--) {
  for (let j = 5; j >= i; j--) {
    document.write(j + " ");
  }
  document.write("<br />");
}

// Question 4

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    document.write(j + " ");
  }
  document.write("<br />");
}

// Question 5

let word = prompt("Enter your word");
let check = "";

for (let i = word.length - 1; i >= 0; i--) {
  check += word[i];
  console.log(word[i]);
}
console.log(word, check);

if (word === check) {
  console.log(word, "is Palindrome word");
}
else {
  console.log(word, "is not a Palindrome word");
}
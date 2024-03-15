// Question 1

// var studentNames = [];
// console.log(studentNames, "stdNames literal array");

// Question 2

// var studentNames = new Array();
// console.log(studentNames, "stdNames object literal array");

// Question 3

// var studentNames = ["Khizar", "Ali", "Abu Bakr"];
// console.log(studentNames, "string Array");

// Question 4

// var studentNames = [20, 290, 45, 100];
// console.log(studentNames, "Number Array");

// Question 5

// var studentNames = [true, false, false, true, 10 === 20];
// console.log(studentNames, "Boolean Array");

// Question 6

// var studentNames = ["Ali", "Muavia", false, 20, 10 === 20, 100, undefined];
// console.log(studentNames, "Mixed Array");

// Question 7

// var studentNames = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil."];

// console.log("Qualifications");

// console.log("1)", studentNames[0]);
// console.log("2)", studentNames[1]);
// console.log("3)", studentNames[2]);
// console.log("4)", studentNames[3]);
// console.log("5)", studentNames[4]);
// console.log("6)", studentNames[5]);
// console.log("7)", studentNames[6]);

// Question 8

// var studentNames = ["Khizar", "Ahad", "Hassaan"];

// var studentScores = [320, 230, 480];

// var student1 = (studentScores[0] / 500) * 100;
// var student2 = (studentScores[1] / 500) * 100;
// var student3 = (studentScores[2] / 500) * 100;

// console.log(
//   "Score of",
//   studentNames[0],
//   "is",
//   studentScores[0],
//   "Percentage :",
//   student1 + "%"
// );
// console.log(
//   "Score of",
//   studentNames[1],
//   "is",
//   studentScores[1],
//   "Percentage :",
//   student2 + "%"
// );
// console.log(
//   "Score of",
//   studentNames[2],
//   "is",
//   studentScores[2],
//   "Percentage :",
//   student3 + "%"
// );

// Question 9

// var colorNames = ["Red", "Green", "Blue", "Pink", "Black"];
// console.log("ColorNames Array", colorNames);

// var userColorAddBeg = prompt("What Color do you want to add to the beginning");
// colorNames.unshift(userColorAddBeg);
// console.log("ColorNames Array", colorNames);

// var userColorAddBeg = prompt("What Color do you want to add to the end");
// colorNames.push(userColorAddBeg);
// console.log("ColorNames Array", colorNames);

// colorNames.unshift("Yellow","Gray");
// console.log("ColorNames Array", colorNames);

// var deltedColorFirst = colorNames.shift();
// console.log("Deleted Color First =",deltedColorFirst);
// console.log("ColorNames Array", colorNames);

// var deltedColorLast = colorNames.pop();
// console.log("Deleted Color Last =", deltedColorLast);
// console.log("ColorNames Array", colorNames);

// var userIndex = Number(prompt("Which index you want to add a color?"));
// var deleteIndex = Number(prompt("How many indexes do you want to delete?"));
// var userIndexColor = prompt("Which color do you want to add?");

// colorNames.splice(userIndex, deleteIndex, userIndexColor);
// console.log("ColorNames Array", colorNames);

// var userIndex = Number(prompt("Which index do you want to delete Colors?"));
// var deleteIndexTotal = Number(prompt("How many Colors do you want to delete?"));

// colorNames.splice(userIndex, deleteIndexTotal);
// console.log("ColorNames Array", colorNames);

// var userIndexCopy = Number(prompt("Which index do you want to copy colors?"));
// var copyIndexTotal = Number(prompt("How many Colors do you want to copy?"));

// var copyArray = colorNames.slice(userIndexCopy, copyIndexTotal);
// console.log("Copy of Array", copyArray);
// console.log("ColorNames Array", colorNames);

// var indexCopyRest = Number(prompt("Which index do you want to copy colors rest of array?"));

// var copyArray = colorNames.slice(indexCopyRest);
// console.log("Copy of Array", copyArray);
// console.log("ColorNames Array", colorNames);

// Question 10

// var studentScores = [320, 230, 480, 120];
// console.log("Scores of Students :", studentScores.join(" , "));

// var orderedArray = studentScores.sort();
// console.log("Ordered Scores of Students :", orderedArray.join(" , "));

// Question 11

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar", "Hyderabad"];
// var selectedCities = cities.slice(2, 4);

// console.log("Cities", cities);
// console.log("Selected cities list:", selectedCities);

// Question 12

// var arr = ["This", "is", "my", "cat."];
// console.log("Array :", arr);

// var joinArr = arr.join(" ");
// console.log("String :", joinArr);

// Question 13

// var arrValues = [];

// console.log("Before added Values :", arrValues);

// arrValues.push("Khizar");
// arrValues.push("Ahad");
// arrValues.push("Hussain");
// arrValues.push("Ahmed");
// arrValues.push("Murtaza");

// console.log("After added Values :", arrValues.join(" , "));

// var FIFO1 = arrValues.shift();
// console.log("Out :", FIFO1);

// var FIFO2 = arrValues.shift();
// console.log("Out :", FIFO2);

// var FIFO3 = arrValues.shift();
// console.log("Out :", FIFO3);

// var FIFO4 = arrValues.shift();
// console.log("Out :", FIFO4);

// var FIFO5 = arrValues.shift();
// console.log("Out :", FIFO5);

// console.log("After Got the Values :", arrValues.join(" , "));

// Question 14

// var arrValues = [];

// console.log("Before added Values :", arrValues);

// arrValues.push("Khizar");
// arrValues.push("Ahad");
// arrValues.push("Hussain");
// arrValues.push("Ahmed");
// arrValues.push("Murtaza");

// console.log("After added Values :", arrValues.join(" , "));

// var FILO1 = arrValues.pop();
// console.log("Out :", FILO1);

// var FILO2 = arrValues.pop();
// console.log("Out :", FILO2);

// var FILO3 = arrValues.pop();
// console.log("Out :", FILO3);

// var FILO4 = arrValues.pop();
// console.log("Out :", FILO4);

// var FILO5 = arrValues.pop();
// console.log("Out :", FILO5);

// console.log("After Got the Values :", arrValues.join(" , "));

// Question 15

// var phoneManufac = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write(`

//             <select>
//                <option value='0'> ${phoneManufac[0]} </option>
//                <option value='1'> ${phoneManufac[1]} </option>
//                <option value='2'> ${phoneManufac[2]} </option>
//                <option value='3'> ${phoneManufac[3]} </option>
//                <option value='4'> ${phoneManufac[4]} </option>
//                <option value='5'> ${phoneManufac[5]} </option>
//             </select>

// `);
// Question 1

// var stdName; var stdAge; var stdClass;

// Question 2

// var myName;
// var ageData;
// var _name;
// var visit8;
// var trac$Record;

// var 1myName;
// var age!Data;
// var #name;
// var visit&;
// var tracRecord+;

// Question 3

// document.write("Rules for naming JS variables");

// document.write("Variable names can only contain letters, numbers, underscores and Dollar Sign.")
// document.write("Variables must begin with a Dollar sign, Underscore or letters.")
// document.write("Variables names are case sensitive")
// document.write("Variable names should not be JS reserved keyword!")

// Question 4

// var num1 = 3;
// var num2 = 5;

// var sumOfNum = num1 + num2;
// console.log(sumOfNum);

// Question 5

// var num1 = 3;
// var num2 = 5;

// var operNum = num1 - num2;
// console.log(operNum);

// var operNum = num1 * num2;
// console.log(operNum);

// var operNum = num1 / num2;
// console.log(operNum);

// var operNum = num1 % num2;
// console.log(operNum);

// Question 6

// var value;
// console.log("Value after variable declaration is: "+value);

// value = 5;

// console.log(value);

// value++;

// console.log(value);

// value += 7;

// console.log(value);

// value--;
// console.log(value);

// value = value % 3

// console.log("The Remainder is "+value);

// Question 7

// var movieTicket = 600;
// var totalCost = movieTicket * 5;

// console.log("Total Cost to buy 5 tickets to a movie is " + totalCost + " PKR");

// Question 8

// var tableNum = 4;
// console.log("Table of " + tableNum);

// var tableCal1 = tableNum * 1;
// var tableCal2 = tableNum * 2;
// var tableCal3 = tableNum * 3;
// var tableCal4 = tableNum * 4;
// var tableCal5 = tableNum * 5;
// var tableCal6 = tableNum * 6;
// var tableCal7 = tableNum * 7;
// var tableCal8 = tableNum * 8;
// var tableCal9 = tableNum * 9;
// var tableCal10 = tableNum * 10;

// console.log(tableNum + " x " + 1 + " = " + tableCal1);
// console.log(tableNum + " x " + 1 + " = " + tableCal2);
// console.log(tableNum + " x " + 1 + " = " + tableCal3);
// console.log(tableNum + " x " + 1 + " = " + tableCal4);
// console.log(tableNum + " x " + 1 + " = " + tableCal5);
// console.log(tableNum + " x " + 1 + " = " + tableCal6);
// console.log(tableNum + " x " + 1 + " = " + tableCal7);
// console.log(tableNum + " x " + 1 + " = " + tableCal8);
// console.log(tableNum + " x " + 1 + " = " + tableCal9);
// console.log(tableNum + " x " + 1 + " = " + tableCal10);

// Question 9

// var celciusTemp = +prompt("Enter your Temp in Celcius!");

// var convertCelciusIntoFahren = (celciusTemp * 9) / 5 + 32;
// console.log(celciusTemp + "°C is equal to " + convertCelciusIntoFaren + "°F");

// var fahrenTemp = +prompt("Enter your Temp in Fahrenheit!");

// var convertFahrenIntoCelcius = ((fahrenTemp - 32) * 5) / 9;
// console.log(fahrenTemp + "°F is equal to " + convertFahrenIntoCelcius + "°C");

// Question 10

// var item1Price = 650;
// var item2Price = 100;

// var orderedQuantityItem1 = 3;
// var orderedQuantityItem2 = 7;

// var order1Total = orderedQuantityItem1 * item1Price;
// var order2Total = orderedQuantityItem2 * item2Price;

// var shippingCharges = 100;

// var totalBillIs = order1Total + order2Total + shippingCharges;

// console.log("Total cost of your order is " + totalBillIs);

// Question 11

// var totalMarks = 980;
// var obtainedMarks = 804;

// var marksPercentage = obtainedMarks / totalMarks * 100;
// console.log("Percentage "+marksPercentage.toFixed(2)+"%");

// Question 12

// var totalUSDollars = 10;
// var totalRiyals = 25;
// var dollarToPkr = 104.08;
// var riyalsToPkr = 28;

// var totalExchangeMoney = (totalUSDollars * dollarToPkr) + (totalRiyals * riyalsToPkr);
// console.log("Total Currency in PKR: "+totalExchangeMoney);

// Question 13

// var randomNum = 26;

// var airthmeticCal = ((randomNum + 5) * 10) / 2;
// console.log(airthmeticCal);

// Question 14

// var currentYear = new Date().getFullYear();

// var birthYear = 2003;

// var totalAge = currentYear - birthYear;
// var totalAge2 = totalAge - 1;

// console.log("You are either " + totalAge2 + " or " + totalAge + " years old!");

// Question 15

// var radius = 20;
// console.log("Radius of Cicle is: " + radius);

// var circleCircum = 2 * Math.PI * radius;
// console.log("The Circumference is: " + circleCircum);

// var area = Math.PI * radius ** 2;
// console.log("The Area is: " + area);

// Question 16

// var favSnacks = "Samosa";
// var currentAge = 15;
// var maximumAge = 65;
// var estimatedPerDayAmount = 3;

// var remainingYearsGet = maximumAge - currentAge;
// console.log("Years " + remainingYearsGet);
// var daysRemaining = remainingYearsGet * 365;
// console.log("days", daysRemaining);
// var totalSnacksNeeded = estimatedPerDayAmount * daysRemaining;

// console.log(
//   "You will need " +
//     totalSnacksNeeded +
//     " " +
//     favSnacks +
//     "s to last you until the ripe old age of " +
//     maximumAge
// );
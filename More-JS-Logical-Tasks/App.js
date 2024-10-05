// Find Anagram Words

function anagramsFunc(arrayOfWords) {
    let anagrams = {};
    for (let word of arrayOfWords) {
        let sortedWords = word.split('').sort().join('');

        if (!anagrams[sortedWords]) {
            anagrams[sortedWords] = [];
        }

        anagrams[sortedWords].push(word);
    }

    console.log(anagrams);
    return Object.values(anagrams);
}

let arrayOfWords = ["bat", "tap", "cat", "tab", "fats", "pat", "khizar", "fast"];
let newAnagramArray = anagramsFunc(arrayOfWords);

console.log(newAnagramArray);

// Find maximum number in array

var arr = [11, 23, 34, 35, 12, 77, 10];
var max = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i]
    }
}

console.log(max);

// Find minimum number in array

var arr = [11, 23, 34, 35, 12, 77, 10];
var min = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i]
    }
}

console.log(min);

// Find the missing numbers in a series from an array

var arr = [50, 51, 52, 55, 56, 57, 58, 60, 63, 64, 65, 69, 70];
var missingNum = [];

for (var i = 0; i < arr.length; i++) {
    var diff = arr[i + 1] - arr[i];
    if (diff > 1) {
        for (var j = 1; j < diff; j++) {
            missingNum.push(arr[i] + j)
        }
    }
}

console.log("Original Array", arr);
console.log("Missing Number Array", missingNum)

// Find the missing numbers in a series from an array and create new proper array with missing number

var arr = [11, 13, 14, 15, 20];
console.log("Before :", arr);

// arr.splice(1, 0, 12); How this is working

for (var i = 0; i < arr.length; i++) {
    var diff = arr[i + 1] - arr[i];
    if (diff > 1) {
        for (var j = 1; j < diff; j++) {
            arr.splice(i + j, 0, arr[i] + j)
        }
    }
}

console.log("After :", arr);

// Generate Random HEX and RGB Color

const randomColorUtility = (length) => {
    let randomColor = Math.floor(Math.random() * length);
    console.log(randomColor);

    return randomColor;
};

const handleCreateRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomColorUtility(hex.length)];
        console.log(hexColor);

    }
    console.log(hexColor);
};

const handleCreateRandomRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    console.log(`rgb(${r},${g},${b})`);
};

// Changing Case of first and last name letter

// First way

var fullName = "khizar wakeel asad";
var fullNameWithCapArr = [];
var fullNameWithCap = "";

var splitName = fullName.split(" ");

console.log(splitName);

for (var i = 0; i < splitName.length; i++) {
    var individualName = splitName[i];
    var capitalizeFirst = individualName.slice(0, 1).toUpperCase();
    var restLetters = individualName.slice(1);
    var fullAfterCapitalized = capitalizeFirst + restLetters
    fullNameWithCapArr.push(fullAfterCapitalized);
    fullNameWithCap = fullNameWithCapArr.join(" ");
}

console.log(fullNameWithCap);

// Second way

const fullName = "khizar wakeel asad";
let fullNameWithCapArr = [];

const splitName = fullName.split(" ");

splitName.forEach(individualName => {
    const capitalizeFirst = individualName.charAt(0).toUpperCase();
    const restLetters = individualName.slice(1).toLowerCase();
    const fullAfterCapitalized = capitalizeFirst + restLetters;
    fullNameWithCapArr.push(fullAfterCapitalized);
});

const fullNameWithCap = fullNameWithCapArr.join(" ");

console.log(fullNameWithCap);

// Third way

const fullName = "khizar wakeel asad munib";
let result = "";
let capitalizeNext = true;

for (var i = 0; i < fullName.length; i++) {
    if (fullName[i] === " ") {
        result += " ";
        capitalizeNext = true;
    } else if (capitalizeNext) {
        result += fullName[i].toUpperCase();
        capitalizeNext = false;
    } else {
        result += fullName[i].toLowerCase();
    }
}

console.log("Result =", result);

// Replace the Third Occurrence of a Word in a String

// First Way

var str = "Saylani SMIT SMIT Mass SMIT Karachi SMIT";
var word = "SMIT";
var rep = "Saylani";
var splitWord = str.split(" ");
var counter = 0;

console.log("Before =", str);

for (var i = 0; i < splitWord.length; i++) {
    if (splitWord[i] === word) {
        counter += 1;
        if (counter === 3) {
            splitWord[i] = "Saylani";
        }
    }
}

str = splitWord.join(" ")
console.log("After =", str);

// Second Way

var str = "Saylani SMIT SMIT Mass SMIT Karachi SMIT";
var word = "SMIT";
var rep = "Saylani";
var counter = 0;

console.log("Before =", str);

for (var i = 0; i < str.length; i++) {

    var wordFind = str.slice(i, i + word.length);

    if (wordFind === word) {
        counter += 1;
        if (counter === 3) {
            str = str.slice(0, i) + rep + str.slice(i + word.length);
            break;
        }
    }
}

console.log("Count =", counter);
console.log("After =", str);
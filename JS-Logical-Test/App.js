// First Question

const nameSwap = (str) => {

    let spiltWords = str.split(" ");
    let reverseWords = spiltWords.reverse();
    let joinWords = reverseWords.join(" ");

    return joinWords;

}

console.log(nameSwap("Abraham Lincoln"));
console.log(nameSwap("Hank Aaron"));

// Second Question

const evenArray = [];

const evenOnly = (numArray) => {
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 === 0) {
            evenArray.push(numArray[i])
        }
    }

    return evenArray

}

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [21, 26, 28, 29];

console.log(evenOnly(array1, "ajsh"))
console.log(evenOnly(array2, "jahs"))

// Third Question

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = array.filter((num) => num % 2 === 0);
console.log(newArray);

// Fourth Question

const repeatString1 = (str, num) => {
    let newStr = ""
    for (let i = 0; i < num; i++) {
        newStr += str
    }
    return newStr
}

console.log(repeatString1('car', 4));
console.log(repeatString1('bar', 3));

// Fifth Question

const repeatString2 = (str, num) => {
    let newStr = "";
    let i = 0;
    while (i < num) {
        newStr += str;
        i++;
    }
    return newStr;
}

console.log(repeatString2('car', 4));
console.log(repeatString2('bar', 3));

// Sixth Question

let whichWord = "";

function longestWordLength(str) {
    const words = str.replace(/[^\w\s]/g, '').split(' ');

    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
            whichWord = words[i];
        }
    }

    return maxLength;
}

const result1 = longestWordLength('Hi, where is the airport?')
console.log(result1, whichWord);
const result2 = longestWordLength('Thanks for stopping by!')
console.log(result2, whichWord);

// Seventh Question

const alphaOrder1 = (str) => {
    let splitStr = str.split("");
    let sortStr = splitStr.sort();
    let joinStr = sortStr.join("")
    return joinStr
}

console.log(alphaOrder1("hello"));
console.log(alphaOrder1("goodbye"));

// Eight Question

const alphaOrder2 = (str) => {
    let strToArray = [...str.toLowerCase()];
    let sortedArray = strToArray.sort();
    let joinArray = sortedArray.join("");

    return joinArray;
}

console.log(alphaOrder2("Hello"));
console.log(alphaOrder2("goodbye"));

// If we will not use toLowerCase so it will not be sorted! so Hello not hello or convert it
// into toLowerCase()

// Ninth Question

const alphaOrder3 = (str) => {
    let splitStr = str.split("");
    let reversedArray = splitStr.reverse();
    let joinArray = reversedArray.join("");

    return joinArray;

}

console.log(alphaOrder3("car"));
console.log(alphaOrder3('bar'));

// Tenth Question

const alphaOrder4 = (str) => {

    let strToArray = [...str];
    let sortedArray = strToArray.reverse();
    let joinArray = sortedArray.join("");

    return joinArray;
}

console.log(alphaOrder4("car"));
console.log(alphaOrder4("bar"));

// Eleventh Question

let isPalindrome = false;

function isPalindromeFunc(str) {
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = normalizedStr.split('').reverse().join('');
    if (normalizedStr === reversedStr) {
        isPalindrome = true;
    }
}

let palindromeSentence = 'Eva, Can I Stab Bats In A Cave?';
isPalindromeFunc(palindromeSentence);

if (isPalindrome) {
    console.log(palindromeSentence, ": is a palindrome!")
}
else {
    console.log(palindromeSentence, ": is not a palindrome!")
}
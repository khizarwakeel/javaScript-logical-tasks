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

for (var i = 0; i < arr.length; i++) {
    var diff = arr[i + 1] - arr[i];
    if (diff > 1) {
        for (var j = 1; j < diff; j++) {
            console.log(arr[i] + j)
        }
    }
}

// Result => 53, 54, 59, 61, 62, 66, 67, 68
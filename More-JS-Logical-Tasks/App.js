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
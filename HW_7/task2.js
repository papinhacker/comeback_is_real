/**
 * 1. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
 *
 * 2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра
 *     и возвращает слово с наибольшим количеством букв.
 *     Если таких слов несколько - возвращает их все.
 */
//1
function isPalindrome(word) {
    return word.split("").reverse().join("") === word;
}

console.log(isPalindrome("JoJ"));

//2
function getLongestWords(sentence) {
    sentence = sentence.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
    const result = [];
    const words = sentence.split(" ");
    words.sort((a, b) => b.length - a.length);
    let longestWord = words[0];
    result.push(longestWord);
    for (let i = 1; i < words.length; i++) {
        if (words[i].length === longestWord.length) {
            result.push(words[i]);
        }
    }
    return result;
}

console.log(getLongestWords("I am super engineer! engineer!"))
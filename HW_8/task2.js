/**
 * Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по следующему критерию: количество гласных букв.
 *   Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */
const words = [
    "umbrella",
    "apple",
    "ocean",
    "independent",
    "education",
    "elephant",
    "island",
    "universe",
    "environment",
    "queue"
];

function getVowelsCount(word) {
    const vowels = ["a", "e", "i", "o", "u"];
    let vowelsCount = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word.charAt(i))) {
            vowelsCount++;
        }
    }
    return vowelsCount;
}


function sortByVowels(array) {
    return array.slice().sort((a, b) => {
        return getVowelsCount(a) - getVowelsCount(b);
    });
}

console.log(sortByVowels(words));
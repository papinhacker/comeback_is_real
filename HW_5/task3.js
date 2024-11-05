/**
 * Создать программу, которая будет принимать на вход СЛОВО (создать переменную со словом),
 * и выводить в консоль количество гласных и согласных букв в этом слове.
 * Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants
 */
let word = "MyWordInCamelCase";
word = word.toLowerCase();
const vowels = ["a", "e", "i", "o", "u"];
const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", 'x', "y", "z"];
let vowelsCount = 0, consonantsCount = 0;
for (let i = 0; i < word.length; i++) {
    if (consonants.includes(word.charAt(i))) {
        consonantsCount++;
    } else if (vowels.includes(word.charAt(i))) {
        vowelsCount++;
    }
}
console.log(`word contains ${vowelsCount} vowels and ${consonantsCount} consonants`);

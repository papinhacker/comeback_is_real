/**
 * Task 3 (НЕ ОБЯЗАТЕЛЬНО)
 *
 * Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось,
 * преобразовываясь в number
 */
const minAge = 18;
const maxAge = 60;
let age = '2s';
if (typeof (age) !== "number") {
    if (/^\d+$/.test(age)) { // contains ONLY digits
        age = parseInt(age);
        console.log("Data type was converted to number");
    } else {
        console.log("Incorrect data type");
    }
}
if (age < minAge) {
    console.log("You don't have access cause your age is " + age + " It's less then " + minAge);
} else if (age >= minAge && age < maxAge) {
    console.log("Welcome  !");
} else if (age > maxAge) {
    console.log("Keep calm and look Culture channel");
} else {
    console.log("Technical work");
}
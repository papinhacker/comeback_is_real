/**
 * Имеется объект const character = { 'name': 'Barney', 'age': 36, 'gender': 'male', 'isQa': true }
 * 1. Создать массив из ключей объекта character и вывести в консоль те, где 4 буквы //name, isQa
 * 2. Создать массив из значений объекта character и вывести в консоль те, где тип данных строка //'Barney', 'male'
 * 3. Создать массив из ключей и значений объекта character, перебрать массив циклом for.
 *    На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`
 * 4. Проверить, есть ли в объекте ключ salary, результат вывести в консоль
 *    (Реализовать 2мя способами: через оператор in и Object.hasOwn())
 */
const character = {
    'name': 'Barney',
    'age': 36,
    'gender': 'male',
    'isQa': true
};

//1
Object.keys(character).forEach((key) => {
    if (key.length === 4) {
        console.log(key)
    }
});

//2
Object.values(character).forEach((value) => {
    if (typeof value === 'string') {
        console.log(value)
    }
});

//3
const data = Object.entries(character);
for (const element of data) {
    console.log(`key = ` + element[0] + `, value = ` + element[1]);
}

//4
console.log("salary" in character);
console.log(Object.hasOwn(character, 'salary'));


/**
 * 1. Бесконечные аргументы
 *   - Напишите функцию, принимающую на вход любое количество массивов
 *   - Функция возвращает массив, в котором будут находиться все переданные в функцию в виде чисел
 *   - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
 *   - Решить с использованием Spread operator
 *
 * 2. Devide by _
 *   - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его.
 *   - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем.
 *   - Пример: I am super engineer => i_Am_Super_Engineer
 *
 * 3. Фибаначчи
 *   - Напишите функцию fibanacci(n), возвращающую энное число Фибоначчи
 *   - числа Фибоначчи (строка Фибоначчи) — числовая последовательность, первые два числа которой являются 0 и 1, а каждое последующее за ними число является суммой двух предыдущих
 *   - Например fibanacci(8) //21
 */
//1
function mergeArrays(...arrays) {
    return [].concat(...arrays);
}

console.log(mergeArrays([1, 2], [3, 4], [5, 6]))

//2
function convertSentenceToOddFormat(sentence) {
    const words = sentence.split(' ').map((st) => st.toLowerCase());
    words[0] = words[0].toLowerCase();
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join('_');
}

console.log(convertSentenceToOddFormat("I am super engiNeer"))

//3
function fibanacci(index) {
    if (index < 2) {
        return index;
    }
    let arr = [0, 1];
    for (let i = 0; i < index - 1; i++) {
        let sum = arr[0] + arr[1];
        arr[0] = arr[1];
        arr[1] = sum;
    }
    return arr[1];
}

console.log(fibanacci(1));
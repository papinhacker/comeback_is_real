/**
 * Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число)
 *   и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты.
 *   Решите эту задачу, используя эффективные методы массива.
 *
 * Пример: const arr = [5,2,7,3,8,1,6] //4
 */
const arr = [5, 2, 7, 3, 8, 1, 6];

function findMissingNumber(arr) {
    let buff = arr.sort((a, b) => a - b)
        .find((value, index, array) => {
            return value + 1 !== array[index + 1];
        });
    return buff + 1;
}

console.log(findMissingNumber(arr));
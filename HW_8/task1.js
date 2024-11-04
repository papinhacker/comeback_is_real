/**
 * Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:
 *   1. forEach - выведите в консоль все числа, делящиеся без остатка на 3 // 30
 *   2. map - создайте новый массив, в котором из каждого элемента изначального массива вычли длину изначального массива
 *      // [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]
 *   3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
 *      // [8, 30, 85, 95, 94]
 *   4. find - найдите элемент, равный своему индексу //2
 *   5. sort - отсортируйте массив по возрастанию, не изменив изначальный
 *      // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]
 *   6. reduce - получите сумму всех чисел массива //466
 *   7. some - проверьте, есть ли в массиве элементы больше 90 //true
 *   8. every - проверьте, что все элементы массива двухзначные //false
 */
const myArray = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];
//1
myArray.forEach((e) => {
    if (e % 3 === 0) {
        console.log(e);
    }
});
//2
console.log(myArray.map((value, index, array) => {
    return value - array.length;
}));
//3
console.log(myArray.filter((value, index, array) => {
    return value > array[index - 1]
}));
//4
console.log(myArray.filter((value, index, array) => {
    return value === index
}));
//5
console.log(myArray.toSorted((a, b) => a - b));
//6
console.log(myArray.reduce((a, b) => a + b, 0)); // 0 is initial value
//7
console.log(myArray.some((value) => {
    return value > 90
}));
//8
console.log(myArray.every((value) => {
    return String(value).length === 2
}));
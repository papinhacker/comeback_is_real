/**
 * Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры.
 *   Если сумма получилась больше 9 - снова сложите цифры. И так пока, сумма не станет меньше либо равной 9.
 *   После окончания сложений возвращает полученное число. Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1
 */
function digitsSum(number) {
    let digits = String(number).split('');
    let result = 0;
    for (let num of digits) {
        result += Number(num);
    }
    if (result > 9) {
        result = digitsSum(result);
    }
    return result;
}

console.log(digitsSum(999));
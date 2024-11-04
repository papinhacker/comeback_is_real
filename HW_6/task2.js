/**
 * 1. У вас есть массив названий пицц вашего конкурента. Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив)
 *   и выводить в консоль только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вывести в консоль null.
 *   Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
 *   Пиццы конкурента:
 *   const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
 */
const myPizzas = ['Peperoni', 'Caprichosa', 's ananasami', 'Margherita', 'Hawai', 'myasnaya', 'Texas', '3 cheeses'];
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'].map(st => st.toLowerCase());
let myNewPizzas = [];
for (let i = 0; i < myPizzas.length; i++) {
    if (!competitorPizzas.includes(myPizzas[i].toLowerCase())) {
        myNewPizzas.push(myPizzas[i]);
    }
}
console.log(myNewPizzas);
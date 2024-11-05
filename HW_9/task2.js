/**
 *  const characters = [
 *     { 'name': 'Barney', 'age': 36 },
 *     { 'name': 'Fred', 'age': 40 },
 *     { 'name': 'Jack', 'age': 50 }
 *   ];
 *
 * 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters.
 *     Объект должен иметь поля name (string) и age (number)
 * 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 * 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 * 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 * 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */
const characters = [
    {'name': 'Barney', 'age': 36},
    {'name': 'Fred', 'age': 40},
    {'name': 'Jack', 'age': 50}
];

//1
function addCharacter(character) {
    if (typeof character.name === 'string' && typeof character.age === 'number') {
        characters.push({...character});
    }
}

//2
function getCharacter(name) {
    return characters.find((char) => char.name === name);
}

//3
function getCharactersByAge(minAge) {
    return characters.filter((char) => char.age >= minAge);
}

//4
function updateCharacter(name, newCharacter) {
    const char = getCharacter(name);
    char.name = newCharacter.name;
    char.age = newCharacter.age;
}

//5
function removeCharacter(name) {
    const charIndex = characters.findIndex((char) => char.name === name);
    characters.splice(charIndex, 1);
}

addCharacter({"name": "Bob", "age": 101});
console.log(getCharacter("Bob"));
console.log(getCharactersByAge(40));
updateCharacter("Bob", {"name": "John", "age": 22});
console.log(characters);
removeCharacter("Barney");
console.log(characters);
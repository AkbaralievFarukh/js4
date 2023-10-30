// Задание 1

// function checkDomain(domain) {
//     if (domain.endsWith('.com') || domain.endsWith('.ru')){
//         return `${domain} have . and ru or com`
//     } else {
//         return `${domain} havent . and ru or com`
//     }
// }
//
// console.log(checkDomain('google.com'))
// console.log(checkDomain('yandex.ru'))
// console.log(checkDomain('softech.kg'))

// Задание 2

// function checkWordLength(word) {
//     if (word.length % 2 === 0 && word.length >= 4 && word.length <= 8) {
//         return `Длина слова ${word} удовлетворяет условиям.`; // Длина слова удовлетворяет условиям
//     } else {
//         return `Длина слова ${word} не удовлетворяет условиям.`; // Длина слова не удовлетворяет условиям
//     }
// }
//
// console.log(checkWordLength('Farukh'))
// console.log(checkWordLength('Alisovamaksimova'))

// Задание 3

// function replaceWord(word) {
//     return [...word].map((char, index) => (index % 2 === 0) ? 'E' : char).join('');
// }
//
// console.log(replaceWord('Farukh'))

// Задание 4

// function passwordChecker (pass1, pass2) {
//     pass1 = pass1.trim()
//     pass2 = pass2.trim()
//
//     if (pass1 === pass2 && pass1 !== '' && pass2 !== '') {
//         return `Пароли совпадают и не содержат пробелы в начале`
//     } else {
//         return `Пароли не совпадают или пусты`
//     }
// }
//
// console.log(passwordChecker('170707', '170707'))
// console.log(passwordChecker('130303', '170707'))

// Задание 5

// let arr = ['lorem', 'ipsum', 'dolor', 'sit']
// function getLength(str) {
//     return str.length
// }
//
// console.log(arr.map(getLength))

// Задание 6

// let arr = ['lorem', 'ipsum', 'dolor']
// let newArr = arr.map((el, idx) => idx + 1)
// console.log(newArr)

// Задание 7

// let inputArray = ['lorem', 'ipsum', 'dolor'];
// let outputArray = inputArray.map((element, index) => {
//     if (index % 2 === 0) {
//         // Если это не четный элемент, то преобразуйте его в верхний регистр
//         return element.charAt(0).toUpperCase() + element.slice(1);
//     } else {
//         // В противном случае оставьте строку неизменной
//         return element;
//     }
// });
// console.log(outputArray);

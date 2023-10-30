// let str = 'farukh'
// console.log(str.split('').reverse().join(''));
//
// let students = ['Farukh', 'Shabdan', 'Alina']
// console.log(students.map(student => student.toUpperCase()));

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(arr.map(el => el * 4))

// let arr = [null, undefined, 2, 'hello', true]
// console.log(arr.map(el => typeof el ))

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr.map(el => {
    return el === 5 ? el * el : el
}))

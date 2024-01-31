// Task 3 -------------------------------------------------------------------
// Написать программу, которая считывает через prompt число 
// и выводит одно из следующих сообщений: ‘Число меньше 100’,
//  ‘Число больше 100’ или ‘Число равно 100’

// Solution 3
const number = +prompt ("Please, enter a number")
if (number < 100) {
    console.log("The number is less than 100")
} else if (number > 100) {
    console.log("The number is more than 100")
} else {
    console.log("The number is equal to 100")
}
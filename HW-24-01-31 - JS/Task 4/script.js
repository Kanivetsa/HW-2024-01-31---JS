// Task 4 -------------------------------------------------------------------
// Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) 
// и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний (18+), 
// или ‘Hi, <name>’, если пользователь несовершеннолетний. 

// Solution 4
const Name = prompt ("Please, enter your name")
const year = +prompt ("Please, enter your year of birth")
if (year < 2007) {
console.log (`Hello ${Name}`)
} else {
    console.log(`Hi ${Name}`)
}



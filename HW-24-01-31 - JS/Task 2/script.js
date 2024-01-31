// Task 2 -----------------------------------------------------------------
// Написать программу, которая получает два числа и выводит наименьшее

// Solution 2
const number1 = +prompt ("Please, enter the 1st number")
const number2 = +prompt ("Please, enter the 2nd number")
if (number1 < number2) {
    console.log(number1)
}else if (number1 > number2){
    console.log(number2)
}
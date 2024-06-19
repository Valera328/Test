// Напишите функцию, которая принимает
// массив с числами и находит сумму квадратов
// элементов этого массива.

function sumOfSquares(arr){
    return arr.reduce((sum,num) => sum + num*num, 0)
}
const numArray = [1,2,3,4,5]
const result = sumOfSquares(numArray)
console.log(result)
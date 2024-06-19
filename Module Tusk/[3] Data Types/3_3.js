// Напишите функцию, которая принимает
// число и выводит в консоль сумму первой и
// последней цифры этого числа

function FirstLast(number) {
    const numStr = number.toString()
    const firstDigit = parseInt(numStr[0])
    const lastDigit = parseInt(numStr[numStr.length - 1])
    const sum = firstDigit + lastDigit
    console.log(sum)
  }
  FirstLast(1234561);

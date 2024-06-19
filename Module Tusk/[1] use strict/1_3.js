// Напишите функцию, которая принимает
// строку и возвращает количество гласных
// букв в ней. Используйте строгий режим.
'use strict'

function Vowels(str) {
  const vowels = 'aeiouyAEIOUY'
  let quantity = 0

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        quantity++
    }
  }
  return quantity
}

const text = "School"
console.log(Vowels(text));  

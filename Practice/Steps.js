//Функция для поска наименьшего количества шагов
function Steps(num) {
    let steps = 0;
    while (num > 1) {
      // Четное, то делим его на 2
      if (num % 2 === 0) {
        num /= 2;
      } else {
        // Нечетное, то вычитаем 1
        num -= 1;
      }
      steps++;
    }
    return steps;
  }
  
  console.log(Steps(2));  
  console.log(Steps(12)); 
  console.log(Steps(16));
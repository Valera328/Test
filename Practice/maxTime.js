//Функция для создания времени из 4 чисел
function maxTime(num) {
    // Сортируем цифры по убыванию, чтобы начать с самых больших значений
    num.sort((a, b) => b - a);
  
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (j !== i) { 
          for (let k = 0; k < 4; k++) {
            if (k !== i && k !== j) { 
              let l = 6 - i - j - k; 
              let hours = `${num[i]}${num[j]}`; //Часы
              let minutes = `${num[k]}${num[l]}`; //Минуты
              if (hours < "24" && minutes < "60") { 
                return `${hours}:${minutes}`; 
              }
            }
          }
        }
      }
    }
    return "Ошибка";
  }
  
  console.log(maxTime([9, 9, 9, 9])); 
  console.log(maxTime([9, 1, 2, 5])); 

  
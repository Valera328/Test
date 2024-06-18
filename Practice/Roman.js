// Функция для фильтрации массива строк и возврата  римских чисел
function Roman(arr) {
    // Создаем регулярное выражение римских чисел
    const romanRegex = /^(M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3}))$/;
    return arr.filter(numeral => romanRegex.test(numeral));
  }
  console.log(Roman(["I", "IIV", "IVI", "IX", "XII", "MCD"])); 
  console.log(Roman(["MMMMCMXCIX", "MMDCXLIV", "MMCIX", "CLD", "LCD"])); 
  
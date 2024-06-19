// Напишите функцию для поиска первого
// неповторяющегося символа  

function FirstUniqueChar(str) {
  const charCount = {};

   for (let i = 0; i < str.length; i++) {
     const char = str[i];
      charCount[char] = (charCount[char] || 0) + 1;
      }

      for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] === 1) {
          return str[i];
        }
      }

      return null;
    }
    
const uniqueChar = FirstUniqueChar('abac');
console.log(uniqueChar); 

// Напишите функцию, которая параллельно
// загружает данные с нескольких удаленных
// серверов, используя Promise.all в сочетании с
// async/await.

async function MultipleApis(apiEndpoints) {
    try {
      const promises = apiEndpoints.map(url => fetch(url));
      const responses = await Promise.all(promises);
      const data = await Promise.all(responses.map(response => response.json()));
  
      const Result = data.reduce((acc, currentResult, index) => {
        acc[`api${index + 1}`] = currentResult;
        return acc;
      }, {});
  
      return Result;
    } catch (error) {
      console.error('Ошибка:', error);
      throw error;
    }
  }
  
  const Urls = [
    'https://jsonplaceholder.typicode.com/posts', 
    'https://jsonplaceholder.typicode.com/comments'
  ];

  MultipleApis(Urls)
    .then(Result => console.log('Результат:', Result))
    .catch(error => console.error('Ошибка:', error));
  
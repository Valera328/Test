// Напишите функцию, которая одновременно
// извлекает данные из нескольких API и
// возвращает объединенный результат,
// используя Promises.

function MultipleApis(apiEndpoints) {
    const promises = apiEndpoints.map(url => 
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP ошибка статус: ${response.status}`);
                }
                return response.json();
            })
    );

    return Promise.all(promises)
        .then(results => {
            const combinedResult = results.reduce((acc, currentResult, index) => {
                acc[`api${index + 1}`] = currentResult;
                return acc;
            }, {});

            return combinedResult;
        })
        .catch(error => {
            console.error('Ошибка:', error);
            throw error;
        });
}

const Urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments'
];

MultipleApis(Urls)
    .then(combinedResult => console.log('Результат:', combinedResult))
    .catch(error => console.error('Ошибка:', error));


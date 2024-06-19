// Сделайте функцию, которая будет
// генерировать случайные числа от 1 до 10.
// Сделайте так, чтобы сгенерированное число
// было задержкой функции setTimeout в
// секундах. Оберните все это в промис. Пусть
// промис выполнится успешно, если
// сгенерировано число от 1 до 5, и с ошибкой -
// если от 6 до 10.

function Random() {
    const randomNum = Math.floor(Math.random() * 10 + 1) 
    const delay = randomNum; 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (randomNum >= 1 && randomNum <= 5) {
                resolve(`Получилось, задержка в ${delay}с`);
            } else {
                reject(`Ошибка, задержка в ${delay}с`);
            }
        }, delay * 1000); 
    });
}


Random()
    .then((message) => console.log(message))
    .catch((error) => console.error(error));

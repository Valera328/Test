// Напишите функцию, которая принимает два
// числа в качестве параметров и выдает
// пользовательскую ошибку, если второе
// число равно нулю

function userEror(a,b) {
    if (b === 0) {
        throw new Error('Ошибка')
    }
    return {a ,b}
}
try {
    console.log(userEror(1,0))
} catch (error) {
    console.error(error.message)
}
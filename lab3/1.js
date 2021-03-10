/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    let words = str.toLowerCase().split(" ");
    let result = "";
    for (let i = 0; i < words.length; i++) {
        result += (words[i][0].toUpperCase() + words[i].slice(1) + " ");
    }
    return result.slice(0, result.length - 1);
}

module.exports = capitalize;
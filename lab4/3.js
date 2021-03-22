/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    if (str.length <= 0) return "";
    let buf = str[0];
    let counter = 1;
    let res = "";
    for (let i = 1; i < str.length; i++) {
        if (str[i] == buf) {
            counter++;
        } else {
            res += buf;
            if (counter != 1) {
                res += counter.toString();
            }
            buf = str[i];
            counter = 1;
        }
    }
    return res + buf + (counter != 1 ? counter : "");
}

module.exports = rle;
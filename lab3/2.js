const e = require("express");

/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
function getMinMax(str) {
    let bez_krinja = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= "9" || str[i] == "-" || str[i] == " " || str[i] == ".")
            bez_krinja += str[i];
    }
    let only_nums = [];
    bez_krinja = bez_krinja.split(" ");
    for (let i = 0; i < bez_krinja.length; i++) {
        if (parseFloat(bez_krinja[i]))
            only_nums.push(parseFloat(bez_krinja[i]));
    }
    let res = {
        min: only_nums[0],
        max: only_nums[0]
    }
    for (let i = 0; i < only_nums.length; i++) {
        if (only_nums[i] > res.max)
            res.max = only_nums[i];
        if (only_nums[i] < res.min)
            res.min = only_nums[i];
    }
    return res;
}

module.exports = getMinMax;
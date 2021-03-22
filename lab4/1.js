/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    if (arr.length <= 0) return [];
    let sorted_strs = arr.map(function(el, ind) {
        return { i: ind, value: el.toLowerCase().split("").sort().join("") };
    });
    sorted_strs.sort(function(a, b) {
        if (a.value > b.value)
            return 1;
        else if (a.value < b.value)
            return -1;
        return 0;
    });

    let ind_res = [];
    ind_res.push({
        leastInd: sorted_strs[0].i,
        arr: []
    });
    for (let i = 0, cur_ind = 0; i < sorted_strs.length; i++) {
        while (i < sorted_strs.length - 1 && sorted_strs[i].value == sorted_strs[i + 1].value) {
            ind_res[cur_ind].arr.push(arr[sorted_strs[i].i]);
            i++;
        }
        ind_res[cur_ind].arr.push(arr[sorted_strs[i].i]);
        if (i < sorted_strs.length - 1) {
            ind_res.push({
                leastInd: sorted_strs[i + 1].i,
                arr: []
            });
            cur_ind++;
        }
    }

    ind_res.sort(function(a, b) {
        if (a.leastInd > b.leastInd)
            return 1;
        else if (a.leastInd < b.leastInd)
            return -1;
        return 0;
    });

    let res = ind_res.map(function(el, ind) {
        return el.arr;
    }).filter(function(el) {
        return el.length > 0;
    });
    return res;

}

module.exports = getAnagramms;
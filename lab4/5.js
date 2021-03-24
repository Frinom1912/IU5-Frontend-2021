/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str) {
    while (true) {
        if (str.length == 1)
            return false;
        if (str.length == 0)
            return true;
        let ind = str.lastIndexOf("(");
        let buf = ")";
        if (str.lastIndexOf("<") > ind) {
            ind = str.lastIndexOf("<");
            buf = ">";
        }
        if (str.lastIndexOf("[") > ind) {
            ind = str.lastIndexOf("[");
            buf = "]";
        }
        let temp_str = str.slice(ind);
        let ind_closed = temp_str.indexOf(buf);
        ind_closed = ind + ind_closed;
        if (ind_closed < ind)
            return false;
        else
            str = str.slice(0, ind) + str.slice(ind_closed + 1);
    }
}

module.exports = checkBrackets;
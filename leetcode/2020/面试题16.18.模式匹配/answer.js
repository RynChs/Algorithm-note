/**
 * @param {string} pattern
 * @param {string} value
 * @return {boolean}
 */
var patternMatching = function (pattern, value) {
    var count_a = 0, count_b = 0;
    pattern = pattern.split('');
    pattern.map(ch => {//统计 pattern中a,b出现的次数
        if (ch == 'a') {
            ++count_a;
        } else {
            ++count_b;
        }
    });
    if (count_a < count_b) {//保证 pattern中a出现的次数不少于b出现的次数
        count_a = [count_b, count_b = count_a][0];
        pattern = pattern.map(ch => {
            return (ch == 'a') ? 'b' : 'a';
        });
    }
    if (value.length == 0) {
        return (count_b == 0);
    }
    if (pattern.length == 0) {
        return false;
    }
    for (var len_a = 0; count_a * len_a <= value.length; ++len_a) {
        var rest = value.length - count_a * len_a;//剩余字符串
        if ((count_b == 0 && rest == 0) || (count_b != 0 && rest % count_b == 0)) {
            var len_b = (count_b == 0 ? 0 : rest / count_b);
            var pos = 0;
            var correct = true;
            var value_a = "", value_b = "";
            pattern.map(ch => {
                if (ch == 'a') {
                    var sub = value.substring(pos, pos + len_a);
                    if (value_a.length == 0) {
                        value_a = sub;
                    } else if (value_a !== sub) {
                        correct = false;
                        return false;
                    }
                    pos += len_a;
                } else {
                    var sub = value.substring(pos, pos + len_b);
                    if (value_b.length == 0) {
                        value_b = sub;
                    } else if (value_b !== sub) {
                        correct = false;
                        return false;
                    }
                    pos += len_b;
                }
            });
            if (correct && value_a != value_b) {//判断a,b是否表示相同的字符串
                return true;
            }
        }
    }
    return false;
};

const pattern1 = "abba";
const value1 = "dogcatcatdog";
console.log(patternMatching(pattern1, value1));

const pattern2 = "abba";
const value2 = "dogcatcatfish";
console.log(patternMatching(pattern2, value2));

const pattern3 = "aaaa";
const value3 = "dogcatcatdog";
console.log(patternMatching(pattern3, value3));

const pattern4 = "abba";
const value4 = "dogdogdogdog";
console.log(patternMatching(pattern4, value4));
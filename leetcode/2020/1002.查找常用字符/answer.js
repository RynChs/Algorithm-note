/**
 * @param {string[]} A
 * @return {string[]}
 */
const commonChars = (A) => {
    return A.reduce((prev, next) => getCommon(prev, next))
};

const getCommon = (a, b) => {
    const map = new Map();

    for (let i = 0; i < a.length; i++) {
        const aData = map.get(a[i]);
        if (!aData) {
            map.set(a[i], 1);
        } else {
            map.set(a[i], aData + 1);
        }
    }

    const result = [];

    for (let i = 0; i < b.length; i++) {
        const bData = map.get(b[i]);
        if (bData) {
            result.push(b[i]);
            map.set(b[i], bData - 1);
        }
    }

    return result;
};
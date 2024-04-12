/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let result = {};
    for(let i of arr1) {
        result[i.id] = i;
    }
    for(let i of arr2) {
        result[i.id] = result[i.id] ? {...result[i.id],...i} : i
    }

    return Object.values(result);
};
/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let result = [];
    arr.forEach((element) => {
        if(Array.isArray(element) && n >0){
            result.push(...flat(element, n-1))
        } else {
            result.push(element);
        }
    })
    return result;
};
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    if(arr.length === 0) {
        return arr;
    } else {
        let result = [];
        for(let i=0; i<arr.length; i) {
            const position = i+size;
            result.push(arr.slice(i, position))
            i=position;
        }
        return result;
    }
};

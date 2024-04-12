/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    var val = 0;
    if(nums.length > 0) {
        for(var i=0; i<nums.length; i++) {
            if(i>0) {
                val = fn(val, nums[i])
            } else {
                val = fn(init, nums[i])
            }
        }
    } else {
        return init
    }
    return val
};
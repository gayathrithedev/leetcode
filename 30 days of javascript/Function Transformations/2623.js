/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cache={}
    
    return function(...args) {
        let key = args.join('#').toString();
        let value = cache[`${key}`]
        if(value !== undefined) {
            return value
        }
        return cache[`${key}`] = fn(...args);
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
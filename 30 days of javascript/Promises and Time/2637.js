/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        const promises = [
            new Promise(resolve => resolve(fn(...args))),
            new Promise((res, reject) => setTimeout(() => reject('Time Limit Exceeded'), t))
        ]
        return Promise.race(promises);
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
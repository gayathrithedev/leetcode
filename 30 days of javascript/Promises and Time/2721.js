/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    let result = [];
    let pending = functions.length;
    return new Promise((resolve, reject) => {
            functions.forEach((fn, index) => {
            fn().then((res) => {
                result[index] = res;
                pending--;
                if(pending ===0) {
                    resolve(result);
                }
            }).catch((err) => {
                reject(err)
            })
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
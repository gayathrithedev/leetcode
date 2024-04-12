/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (Array.isArray(obj)) {
  const temp = []
  for (const item of obj) {
    if (item) {
      if (typeof item === "object") temp.push(compactObject(item))
      else temp.push(item)
    }
  }
  return temp
}
for (const [key, value] of Object.entries(obj)) {
  if (!value) delete obj[key]
  else if (typeof value === "object") obj[key] = compactObject(value)
}
return obj
};
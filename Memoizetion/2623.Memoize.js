/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cache = {};
    return function(...args) {
      //finde key and convet into string
      let key = args.toString();
      if(key in cache){
        return cache[key];
      }

      const result = fn(...args);
      cache[key] = result;
      return result;
    
    }
}
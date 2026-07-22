/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
   let result = { };
   for(let item of this){
    let key = fn(item);
    //check if key exists
    if(!result[key]){
        //create key
        result[key]=[]; 
    }

    //already existing so push in exisitng key
    result[key].push(item);
   }

   return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
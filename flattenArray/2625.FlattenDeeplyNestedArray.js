/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
   let result = [];

 function solver(currentarr, depth){
    for(let i =0 ; i < currentarr.length ; i++){
        if(Array.isArray(currentarr[i]) && depth > 0){
          solver(currentarr[i], depth - 1);
        }else{
            result.push(currentarr[i]);
        }
    }
 }
 //call to function
 solver(arr, n);
 return result;
   
};
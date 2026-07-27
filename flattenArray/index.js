// const nested = [1, [2, [3, 4]]];
// // const flat = nested.flat(0); 
// // console.log(flat);
// let result = [];
// for(let i =0 ; i< nested.length;i++){
//     console.log(nested[i]);
//     console.log(Array.isArray(nested[i]));
//     if(Array.isArray(nested[i])){
//         //loop on it
//         for(let j = 0; nested[j].length ; j++){
//             result.push(nested[i]);
//         }
//     }
//     result.push(nested[i]);


// };
// console.log(result);


let  arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];

// let res = "";
let result = [];

function flattenArray(arr){
   for(let i = 0; i< arr.length;i++){
     //check array for ech element
     if(Array.isArray(arr[i])){
         flattenArray(arr[i]);
     }else{
        // res += arr[i];
        result.push(arr[i]);
     }
   }
   return result;
}

console.log(flattenArray(arr));






// Here is how to modify your recursive function to accept a depth parameter n:




let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];

function flattenToDepth(arr, n = 1) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        // Only flatten if it is an array AND we haven't reached depth n
        if (Array.isArray(arr[i]) && n > 0) {
            // Pass n - 1 to the next level
            result = result.concat(flattenToDepth(arr[i], n - 1));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

// Examples:
console.log(flattenToDepth(arr, 1)); 
// Output: [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

console.log(flattenToDepth(arr, 2)); 
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]










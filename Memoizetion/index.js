const cache = {}

function memoriza(a , b){
   //check key
   const key = a+":"+b;
    console.log(key);  
    if (!cache[key]) {
        //calculate are stro
        const result = calculation(a , b);
        cache[key] = result;
        return result;
    }else{
        //return form cache
        return cache[key];
    }
   
}


function calculation(a , b){
    console.log("function call!");
    return a+b;
}







//call function
// const result = calculation(10, 30);
memoriza(10, 30);
 memoriza(10, 30);
 memoriza(10, 30);
// console.log("result : " , result);
console.log(cache);




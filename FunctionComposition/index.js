function add(a, b){
    return a+b;
}

function squar(val){
    return val *val;
}

//makecomposition function
function compose(fn1 , fn2){
   return function(a , b){
     return fn2(fn1(a,b));
   }
}

//convert into modern
const com2 = (fn1 , fn2)=> (a , b) =>fn2(fn1(a , b));


const result = compose(add , squar);

console.log("result :" , result(10 , 20));

console.log(com2(add , squar)(10 , 30 ));

////////////////////////////////////////////////////////////////////////////////////////////

function addToNum(values){
    return values[0] + values[1];
}

function suqreOfNo(val){
    return val * val;
}


//pass multiple function
function composAll(...args){
   return function(...value){
    return args.reduceRight((a , b) => b(a) , value);

   }
};



// let nums = [ 21, 3, 4,54,454,5545,445,45];
// let i = 0;
//  const res = nums.reduce((a ,b) =>{
//     console.log(" / "  , a , " :" , b);
//     console.log(i);
//     return a + b;
//  } , i);

//  console.log(res);



const ans = composAll((x) => x + 1 , (x) => x*x , (x) => 2 * x);


console.log("multiple function comostion result : " , ans(4));

let values = [2, 5, 2];
let values2 = [2, 0, 2];



const add = values.reduce((a , b)=>{
    console.log("a : " , a , " b : " , b);
    return a+b;
});
const sub = values.reduce((a , b)=>a-b);

const div = values2.reduce((a , b) =>{
    //cehck second val
    if(b===0 ){
         throw  new Error("zero not allowed!");
    }
})
console.log(add);
console.log(sub);
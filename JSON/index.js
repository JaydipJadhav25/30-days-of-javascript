// let obj = {
   
// }

// let obj2 = [1 , 3 ];
// console.log(Object.keys( obj));

// console.log(Object.keys(obj2).length === 0);

// let num = [1,2,3,4,5];

//  const result = num.sort((a, b)=>{
//     console.log(a , " : " , b);
// })

// console.log(result);









arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
], 
arr2 = [
    {"id": 3, "x": 5},
    {"id": 3, "x": 4}
]


let left = 0;
let right = 0;
let current = 0 ;
let result = [];
let prev = 0;


console.log(arr1[0].id);

while(left < arr1.length && right < arr2.length ){
    //current is big or small
    if(arr1[left].id < arr2[right].id){
        //also check repated element
        //arr1 is smaller than other
        if(arr1[prev].id !== result[current]?.id){
             //so add 
             result[current] = arr1[left];
             //update both
             left++;

            prev = current++;
             
        }else{
            //skip element so only update left
            left++;
        }
    }else{
        //right is smaller
        //first check rexisting in array
        if(arr2[prev].id !== result[current]?.id){
            //so add update
            result[current] = arr2[right];
            right++;
           prev =  current++;
        }else{
            //skip
            right++;
        }
    
    }
}



//got check for reaming
while(right < arr2.length){
    //add direct just check do not duplicate
    if(result[current]?.id != arr2[prev]?.id){
        //if not so add
        result[current] = arr2[right++];
        prev = current++;
    }else{
        //skip
        right++;
    }
}



console.log(result);





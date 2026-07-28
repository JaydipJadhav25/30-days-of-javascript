


// function compactObject(obj){

//     ///check if is not array or object
//     if (obj === null ||  typeof obj !== "object" ) {
//         return obj;
//     }


//     //now check array of object
//     if (Array.isArray(obj)) {
//         //this is array
//         let result  = [];

        
//        }else{
//         //this is object
//         let result = {};

//     }
    
// }


// const obj = [null, 0, false, 1];

// console.log(compactObject(obj));











/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    //first check if paramenter is not object or arrya so return
    if(obj === null ||  typeof obj !=="object"){
        return obj;
    }

    //now check 
    //1.is array
    if(Array.isArray(obj)){
     let result =[];

     //loop
     for(let iteam of obj){
        const compacted = compactObject(iteam);

        //check
        if(Boolean(compacted)){
            result.push(compacted);
        }

     }

     return result;

    }


    //for object
    const result = {};
    for(let key in obj){
        const compacted = compactObject(obj[key]);


        //check
        if(Boolean(compacted)){
            result[key]= compacted;
        }
    }

    return result;

  
  
};

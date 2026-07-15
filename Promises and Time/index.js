const dmeo = new Promise((resolver , reject)=>{
    let success = true;

    if(success){
        resolver(2);
    }else{
        reject("this is rejector");
    }



    // setTimeout(()=>{

    //     resolver("done......!");

    // },5000)
});



// console.log(dmeo);

// dmeo
// .then((res)=>{

//  console.log(res);
 
// })
// .catch((err)=>{

//  console.log(err);

// })


const val = await dmeo;
console.log(val);



//setintervel
const id =  setInterval(()=>{
 console.log("hii");
},2000)

clearInterval(id);









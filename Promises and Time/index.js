// const dmeo = new Promise((resolver , reject)=>{
//     let success = true;

//     if(success){
//         resolver(2);
//     }else{
//         reject("this is rejector");
//     }



//     // setTimeout(()=>{

//     //     resolver("done......!");

//     // },5000)
// });



// // console.log(dmeo);

// // dmeo
// // .then((res)=>{

// //  console.log(res);
 
// // })
// // .catch((err)=>{

// //  console.log(err);

// // })


// const val = await dmeo;
// console.log(val);



// //setintervel
// const id =  setInterval(()=>{
//  console.log("hii");
// },2000)

// clearInterval(id);



const startbtn = document.getElementById("start");
const stopbtn = document.getElementById("stop");
const p = document.getElementById("para");

let timer = 0;

let num = 0;
startbtn.addEventListener('click' , ()=>{
    timer = setInterval(()=>{
        p.innerText = num;
        num++;
        console.log(num);
    },500);
})


stopbtn.addEventListener('click' , ()=>{
    clearInterval(timer);
})











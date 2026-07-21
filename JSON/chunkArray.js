let arr = [1 ,3, 4 ,5 , 6];
let size = 1;


let start = 0;
let end = size;
let len = arr.length;
let ans = [];


while(start < len){
   //cut part
   let temp = arr.slice(start , end);
   //add in result
   ans.push(temp);
   //update pointers
   console.log(start , " : " , end);
   start = end;
   end  += size;
}

console.log("final : " , ans);
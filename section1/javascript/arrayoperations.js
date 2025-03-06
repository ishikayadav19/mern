const nums=[34,67,8,7,23,74];
for(let i=0; i<nums.length;i++){
    console.log(nums[i]);
}
console.log('for of loop');
for (let n of nums){
    console.log(n);
}
console.log('for each function');

nums.forEach((n,i,b)=>{
    console.log(n,i,b);
});
console.log("odd")
   const arr=[23,44,22,12];
   for(let n of arr){
    if(n%2!==0){
        console.log(n);
    }
   }
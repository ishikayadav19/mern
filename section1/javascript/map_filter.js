const nums=[4,5,2,7,34];
 
 const nums2 =nums.map((n)=>{return n*2}); //map is used to modify the elements and give a copy of new array
 console.log(nums2);
 const prices=['$56.6','$345.56','$678.6'];
 console.log(parseInt('$56.6'.slice(1)));
 const intPrices=prices.map((p)=>{
    return parseInt(p.slice(1));
    console.log(intPrices);

 });

 const evenNums = nums.filter((n) =>{ return n%2===0 }) //filter checks the conditions and give a array of elements whic satisfy the condition
 console.log(evenNums);

 const evenNums1 = nums.map((n)=>{return n%2===0})
 console.log(evenNums1);

 const nums3 = [34,25,36,45,49,84];
  
 console.log(Number.isInteger(49**0.5));
 const sqNums = nums.filter((n) =>{ return Number.isInteger(n**0.5) }) 
 console.log(sqNums);
 
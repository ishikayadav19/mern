const age = 10;
if (age >= 18)
{
    console.log('You can vote. ');
    const somevar = 'nice'   
}
else
{
    console.log('ypu can not vote');
    
}
console.log(somevar);
// wap to check if a number is +ve -ve or 0
const number=0;

if( number> 0)
{
    console.log('Number is positive');
}
else if( number< 0)
    {
        console.log('Number is negative');
    }
    else{
        console.log('Number is Zero');
        
    }

//wap to check if a number is even or odd
const num = 5
if(num%2==0)
{
    console.log('even');
}
else{
    console.log('odd');
    
}
//wap to check if a number divisible by 5 or not
const n=14
if(n%5 == 0)
{
    console.log('Number is divisible by 5');
    
}
else{
    console.log('Number is not divisible by 5');
    
}
//wap to check if a number is perfect sqaure or not
const n1 = 17;
const root = n1 ** 0.5
console.log(root);

if(Number.isInteger(root))
{
    console.log('Number is perfect square.');
}else{
    console.log('Number is not perfect square.');
    
}



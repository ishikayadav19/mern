function addNums(a,b){
    var c=a+b;
    console.log(c);
    
};

addNums(54,56)
// console.log(c);

const getAvg = function(m1,m2,m3){
    const avg = (m1+m2+m3)/3;
    // console.log(avg);
    return avg 
    
}
const result =getAvg(45,78,95);
console.log(result);

const factorial = (num) => {
    let f = 1;
    for( let i=2; i<=num; i++)
    {
        f*=i;
    }
    return f;
}
console.log(factorial(7));


let [a, b, c] = [3, 4, 5];
console.log(a,b,c);
[a,b] = [b,c]
console.log(a,b,c);

const [x,,,,y]=[5,4,3,2,6];
console.log(x,y);

const getMultipleValues = () => {
    return [33,44,55]
}
const [m, n, o] = getMultipleValues();
console.log(o);
console.log(m);


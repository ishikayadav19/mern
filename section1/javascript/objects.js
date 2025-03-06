const user ={
    name: 'Lestrade',
    email: 'lestrade@gmail.com',
    password : 'abc123'
};
console.log(user);
console.log(user.name); //way to access any object value
console.log(user['email']);
console.log(user.password);

console.log('updated----');

user.name = 'sherlock';
console.log(user);
user.address = '22b1 baker street';
console.log(user);

// delete user.password;
// console.log(user);
// object predefined ,it has many functions
console.log(Object.keys(user));
console.log(Object.values(user));

const smartphone ={
    brand : 'Lava',
    model : 'Agni 2',
    price : 18000,
    colors : ['Blue', 'Black', 'White']
}

console.log(smartphone.colors[1]);
smartphone.colors.unshift("green");
smartphone.colors.push("red");
smartphone.colors.splice(2,0,"pink");

console.log(smartphone.colors);

console.log('---------------');

const smartphoneArray =[
    {brand: 'Samsung',
        model : 's25',
        price : 120000,
    colors : ['Blue', 'Black', 'White']
    },
    {brand: 'Nothing',
        model : '3a',
        price : 30000,
    colors : ['Blue', 'Black', 'White']
    },
    {brand: 'Samsung',
        model : 's15',
        price : 120000,
    colors : ['Blue', 'Black', 'White']
    },
    {brand: 'Apple',
        model : 'iphone 12',
        price : 890000,
    colors : ['Blue', 'Black']
    },
    {brand: 'Oneplus',
        model : '9',
        price : 60000,
    colors : ['silver', 'Black', ]
    },
    {brand: 'Google',
        model : 'Pixel 8',
        price : 55000,
    colors : ['White', 'Blue', ]
    }
]



console.log(smartphoneArray);
// price of second smartphone
console.log(smartphoneArray[1].price);
// 2nd color of 3rd smrtphone
console.log(smartphoneArray[2].colors[1]);
// replace 2nd color of last smartphone
smartphoneArray[4].colors[1]='red';
console.log(smartphoneArray[4].colors);

// filter all samsung phones
const samsung = smartphoneArray.filter((n) =>{ return n.brand ==='Samsung' }) 
console.log(samsung);




// filter all phones with price less than 50000
const lessprice= smartphoneArray.filter((n) =>{ return n.price < 50000 }) 
console.log(lessprice);
// filter all phones with blue color
const BlueColor= smartphoneArray.filter((n) =>{ return n.color =='blue' }) 
console.log(BlueColor);

// get an array of all brands
const brand1 =smartphoneArray.map((n)=>{return n.brand})
console.log(brand1);


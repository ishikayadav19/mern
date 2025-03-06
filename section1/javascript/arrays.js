const movies = ['chhava','John Wick','Gadar','Daraar','Sholey','Avengers'];
console.log(movies.length);
console.log(typeof movies);
console.log(Array.isArray(movies));
// indexing
console.log(movies[2]);
console.log(movies[20]);
console.log(movies.indexOf('Daraar'));
console.log(movies.at(2));

movies[4] = 'PK'
console.log(movies);

// slicing
console.log(movies.slice(2,5));
// slicing
console.log(movies.slice(3));
console.log(movies.slice(2,-1));
console.log(movies.slice(0,-3));

// push pop shift unshift => used for addition or removal operation in an array

console.log(movies);

movies.push('Dhoom'); //add at last
console.log(movies);
movies.unshift('Dhoom 3'); //add in the begining
console.log(movies);

movies.pop(); //remove from end
console.log(movies); 

movies.shift() //remove from start
console.log(movies);

// splicing
movies.splice(2,2);
console.log(movies);

movies.splice(2,2,'Dhoom 2','Gadar 2')
console.log(movies);

movies.splice(2,0,'Dhoom 3', 'Gadar 3');
console.log(movies);





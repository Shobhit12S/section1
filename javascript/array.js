const arr=["shobhit kumar","nancy"]
console.log(arr[0]);
console.log(Array.isArray(arr));
console.log(arr.length);




const movie=["stree2","veda","munjya","strenger"]
console.log(movie);
console.log(movie.at(-2))
movie[3]='nastik'
console.log(movie)


//slicing
console.log(movie.slice(0,4));
console.log(movie.slice(2,4))
console.log(movie.slice(-2));




//adding and removing the element
console.log(movie.push("radha"));
console.log(movie);
console.log(movie.unshift("krishna"));
console.log(movie);
///pop and shift both are removing function
movie.shift()//remove from start
movie.pop()//remove from ending
console.log(movie);
//console.log(movie.splice(2,2));
movie.splice(2,2,"kalki","OMG");
console.log(movie);











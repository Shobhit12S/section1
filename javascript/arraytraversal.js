const num=[2,4,6,8,09,05]
for(let i=0;i<=5;i++){
    console.log(num[i]**2);
    
    
}
console.log("--------------");
for(let n of num){
    console.log(n**2)
}

console.log("-------------");

num.forEach((n, i,j)=> {
    console.log(n ,i,j)
})
//even number
console.log("***************");

num.forEach((n)=> {
    if(n%2==0){
        console.log(n)
    }
})
   




///foreach

function add(a,b){
     sum=a+b;
    console.log(sum);
    
}
add(2,4);
//console.log(sum);

//function
const getAvg=function(m1,m2,m3){
    avg=(m1+m2+m3)/3;
    console.log(avg);
    
}
getAvg(3,3,3)
//subtraction
const sub=function(s1,s2){
    subt=s1-s2
    console.log(subt);
}
const result=sub(10,3);
console.log(result);
const fact=(n)=>{
    let f=1;
    for(let i=1;i<=n;i++){
        f=f*i
    }
  return f
}
let ans=fact(5)
console.log(ans);
//prime no.




const prime=(num)=>{
    for(let j=2; j<10;j++){
        if(num%j===0){
            console.log(" not prime no.");
            break
        }
        else{
            console.log("prime");
            
        }
    }
}
prime(7);




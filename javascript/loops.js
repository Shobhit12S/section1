//loops
for(let n=15;n<=15;n++){
    for(let i=1;i<=10;i++){
        table=n*i
        console.log(n,"*",i,"=",table)
    }
}
//while loop
let count=1
while(count<=10){
    console.log("count",+count)
    count=count+1
}
//print odd number
for(let j=1;j<=20;j++)
{
    if(j%2!=0){
        console.log("odd number is",j)
    }
}
console.log("..................")
//sum of two number
let sum=0
for(let k=1;k<=10;k++)
{
    sum=sum+k
}
console.log("sum is",sum)
//list
fruits=["apple","banana","grapes"]
for(let i=0;i<=fruits.length
)
//dictionary
const person={
    name:"shobhit kumar",
    dgree:"b.tech",
    age:18 
};
for(let key in  person){
    console.log(key+":"+person[key])
}
fruits1=["apple","banana","grapes"]
for(let fruit of fruits1 ){
    console.log(fruit)
}
//the no. is divisible by 7
for(let n=10;n<=30;n++){
    if(n%7==0){
        console.log(n)
    }
}
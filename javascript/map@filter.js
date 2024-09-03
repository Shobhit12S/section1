const n1=[2,3,4,5,7,9]
const n2=[]
for(let i=0;i<=6;i++){
    num=n1[i]**3
    
}
//
const lst1=[2,3,4,5,6]
const lst2=[]
lst1.forEach((n)=>{
    lst2.push(n**3)
})
console.log(lst2);

//even number
const l1=[2,4,5,6,7,8]
const l2=[]
console.log(l1);
l1.forEach((n)=>{
    if(n%2==0){
        l2.push(n)
    }
})
console.log(l2);



///map filter
//map :- traverse all element
//filter :-means filter according your condition
const newnum=lst1.map((n)=>{return n**3})
console.log(newnum);
//
const l3=[2,3,4,5,6]
const l4=l3.map((n1)=>{return n1**2})
console.log(l4);
///add 18% gst
const price=[200,443,543,654,321]
const p2=[]
const p1=price.map((n)=>{return n+n*.18})
console.log(p1);
const newn1=l1.filter((n)=>{ return n%2===0})
console.log(newn1);

///perfect square
const sq=[2,4,7,9,16,18,25]
const sq1=sq.filter((n)=>{return Number.isInteger(n**0.5)})
console.log(sq1);
//
const nme=["shobhit","kumar","isha","saniya"]
const nme2=nme.filter((n)=>{return })






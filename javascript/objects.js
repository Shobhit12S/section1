//objects
const abc={
    name:"shobhit kumar",
    email:"shobhit.kumar@gmail",
    password:"1234@abc"
};
console.log(abc);
console.log(abc["password"]);
console.log(abc.name);
abc.password="shobhit12"
console.log(abc);
abc.address="Lucknow";
console.log(abc);



abc.address={
    city:"lucknow",
    states:"uttar pradesh",
    pin:"226021"
};
console.log(abc);
console.log(abc.address.city);
abc.post=['post1','post2'];
console.log(abc);
console.log(abc.post[1]);
console.log(Object.keys(abc));
console.log(Object.values(abc));
//console.log(Object.entries(abc));


const smartphone={
    brand:"samsang",
    model:"galaxy j2",
    price:"8k",
    color:["white","brown","black"]
};
console.log(smartphone);

console.log(smartphone.color[1]);
smartphone.color[3]="light blue"
console.log(smartphone);
smartphone.color[2]="grey"
console.log(smartphone);
smartphone.color.splice(0,1,"yellow")
console.log(smartphone);
const {email,password}=abc;
console.log(email);
console.log(password);

const [a,b,c]=[10,20,30];
const smartphonearray=[
    {
    brand:"samsang",
    model:"galaxy j2",
    price:"8000",
    color:["white","brown","black"]
    },
    {
        brand:"realme",
        model:"narzo 10",
        price:"1500",
        color:["white","grey","blue"]
        },
        {
            brand:"iphone",
            model:"15pro",
            price:"149000",
            color:["blueis","red","silver"]
            },
            {
                brand:"redme",
                model:"t2x",
                price:"19000",
                color:["white","black"]
                }
];
console.log(smartphonearray);
console.log(smartphonearray[2].price);
const sa=smartphonearray.filter((n)=>{return n.price<=15000})
console.log(sa);
const ar1=smartphonearray.filter((n)=>{return n.brand=="samsang"})
console.log(ar1);
























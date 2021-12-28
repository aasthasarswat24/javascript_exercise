const _ = require("lodash");

const members = [
    {name: 'Laveesh Gupta', age: 20},
    {name: 'Yash Jangid', age: 40},
    {name: 'Firoz Khan', age: 41},
    {name: 'Amrit Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Swpril Ahuja', age: 45},
    {name: 'Yogesh Khatri', age: 51}
];

//1.
const fNames = _.forEach(members, (member)=>{
    const splitName = member.name.split(" ");
    const memberFname = splitName[0];
    console.log(memberFname);
})

//2.
const lNames = _.forEach(members, (member)=>{
    const splitName = member.name.split(" ");
    const memberLname = splitName[1].toUpperCase()
    console.log(memberLname);
}) 

//3.
const ageArr = _.filter(members, member=> member.age >40 && member.age<60);
console.log(ageArr);


const filteredArray = _.filter(members,(member)=>member.age!=undefined)
console.log(filteredArray);

//4. 
const avgAge = _.reduce(filteredArray, (total, item)=>{
    return total + item.age;
}, 0)
console.log(avgAge/filteredArray.length);

//5. 
let maxAge = 0;
_.forEach(filteredArray, (member)=>{
    if(member.age > maxAge){
        maxAge = member.age;
    }
})
console.log(maxAge);

//6. 
const young =[];
const old = [];
const noAge = [];
_.forEach(members,(member)=>{
    if(member.age>35){
        old.push(member);
    }
    else if(member.age<=35){
        young.push(member);
    }
    else{
        noAge.push(member);
    }
})
const devideAge = {young, old, noAge}
console.log(devideAge)


//7.
_.insert =((members, index, item)=>{
    members.splice(index, 1, item)
});
_.insert(members,2,{'name':'insertnew field', age:23});
console.log(members);

//8.
const [first, second ]= members;
console.log(first,second); 

//9. 
const newMembers = members;
_.insert =((members, index, item)=>{
    members.splice(index, 1, item)
});
_.insert(newMembers, 0, {'name':'insertnew field', age:23});
console.log(newMembers);

//10.
const [{name,age}]=members;
console.log(name,age);

//11. 
const [{name: name1,age:age1},{name:name2, age:age2}]= members;
console.log(name1, age1);
console.log(name2,age2); 

//12. 
const [{name, ...remaining}]= newMembers;
console.log(name, remaining);

//13.
const [{...obj1}]= members;
console.log(obj1);
obj1.name="overridden name";
obj1.age=22;
console.log(obj1);

//14. 
const filteredArray = _.filter(members, (member)=>member.age!=undefined)
console.log(filteredArray);

const totalAge = _.reduce(filteredArray, (sum, item)=>{
    return sum + item.age;
}, 0)
console.log(totalAge/filteredArray.length);

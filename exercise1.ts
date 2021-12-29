const membersArray: { name: string, age?: number }[] = [
    { "name": "Laveesh Gupta", "age":20 },
    { "name":  "Yash Jangid", "age": 40},
    { "name":  "Firoz Khan", "age": 41},
    { "name":  "Amrit Srivastava", "age": 17},
    { "name":  "Chandraprakash Sharma"},
    { "name":  "Swpril Ahuja", "age": 45},
    { "name":  "Yogesh Khatri", "age": 51},
];


//1. Get array of first names of everyone
membersArray.forEach((member)=>{
    const splitName:string[] = member.name.split(" ");
    const memberFname:string = splitName[0]
    console.log(memberFname);
}) 

//2. Make everyone's last names in UPPERCASE in given array of objects
membersArray.forEach((member)=>{
    const splitName:string[] = member.name.split(" ");
    const memberLname:string = splitName[1].toUpperCase()
    console.log(memberLname);
}) 

//3. Get entries where age is between 41-60
const agesArr:{ name: string, age?: number }[] = membersArray.filter(member=> member.age >40 && member.age<60);
console.log(agesArr);

//filtered array to leave undefined values and store rest 
const filteredArray:{ name: string, age?: number }[] = membersArray.filter((member)=>member.age!=undefined)
console.log(filteredArray); 

//4. Get average age
const avgAge:number = filteredArray.reduce((total, item)=>{
    return total + item.age;
}, 0)
console.log(avgAge/filteredArray.length); 

//5. Get Person with maximum age
let maxAge:number = 0;
filteredArray.forEach((member)=>{
    if(member.age > maxAge){
        maxAge = member.age;
    }
})
console.log(maxAge);


// 6. Divide persons in three groups, result should look like
//    {
//      'young': [],
//      'old': [],
//      'noage': []
//    }
//    Less than 35yrs is young, above 35 is old 
const young:{ name: string, age?: number }[] =[];
const old:{ name: string, age?: number }[] = [];
const noAge:{ name: string, age?: number }[] = [];
membersArray.forEach((member)=>{
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
const divideAge:object = {young, old, noAge}
console.log(divideAge)

//7. add a new member to same members array instance at index 2
membersArray.splice(2, 1, {name:'new member', age:20});
console.log(membersArray);

//8. extract first and second element using destructing
const [first, second ]= membersArray;
console.log(first,second);

//9. Create a new array instance adding a new member at index 0, and keeping existing afterwards
const newMembers:{ name: string, age?: number }[] = membersArray;
newMembers.unshift({name:'newMemberAt index0', age:57})
console.log(newMembers); 

//10. Extract properties of object using destructuring
var [{name:na ,age }]=membersArray;
console.log(na ,age);

//12. Destructure any property of an object and use spread operator to get remaining properties in an object
//....................uncomment 9th to run this.....
var [{name:na, ...remaining}]= newMembers;
console.log(na, remaining); 

//13. Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step
const [{...obj1}]= membersArray;
console.log(obj1);
obj1.name="overridden name";
obj1.age=22;
console.log(obj1); 

//14. Use reduce function on array and object
const totalAge:number = filteredArray.reduce((sum, item)=>{
    return sum + item.age;
}, 0)
console.log(totalAge);

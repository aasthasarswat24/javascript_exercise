interface obj { name: string, age?: number }
const membersArray: obj[] = [
    { "name": "Laveesh Gupta", "age":20 },
    { "name":  "Yash Jangid", "age": 40},
    { "name":  "Firoz Khan", "age": 41},
    { "name":  "Amrit Srivastava", "age": 17},
    { "name":  "Chandraprakash Sharma"},
    { "name":  "Swpril Ahuja", "age": 45},
    { "name":  "Yogesh Khatri", "age": 51},
];


//1. Get array of first names of everyone
const fName:string[] = membersArray.map((member)=>{
    return member.name.split(" ")[0];
}) 
console.log(fName)

//2. Make everyone's last names in UPPERCASE in given array of objects
const lName:string[] = membersArray.map((member)=>{
    const last:string =  member.name.split(" ")[1];
    return last.toUpperCase()
}) 
console.log(lName)

//3. Get entries where age is between 41-60
const agesArr:obj[] = membersArray.filter(member=> member.age && member.age >40 && member.age<60);
console.log(agesArr);

//filtered array to leave undefined values and store rest 
const filterArray:obj[] = membersArray.filter((member)=>member.age)
console.log(filterArray); 

//4. Get average age
const avgAge:number = filterArray.reduce((total, item)=>{
    return total + item.age;
}, 0)
console.log(avgAge/filterArray.length); 


//5. Get Person with maximum age
const maxAge:number = Math.max( ...filterArray.map((member)=>member.age ))
console.log(maxAge);


// 6. Divide persons in three groups, result should look like
//    {
//      'young': [],
//      'old': [],
//      'noage': []
//    }
//    Less than 35yrs is young, above 35 is old 
/*
const young =[];
const old = [];
const noAge = []; 

const result = membersArray.reduce((finalMembersGroupedObject, currentMember) => {
    if(currentMember.age>35) {
        if(finalMembersGroupedObject.old) {
            return {...finalMembersGroupedObject, ['old']: [...finalMembersGroupedObject.old, currentMember]}
        }
        return  {...finalMembersGroupedObject, ['old']: [currentMember]}
    }
    if(currentMember.age <= 35) {
        if(finalMembersGroupedObject.young) {
            return {...finalMembersGroupedObject, ['young']: [...finalMembersGroupedObject.young, currentMember]}
        }
        return  {...finalMembersGroupedObject, ['young']: [currentMember]}
    }
    if(finalMembersGroupedObject.noAge) {
        return {...finalMembersGroupedObject, ['noAge']: [...finalMembersGroupedObject.noAge, currentMember]}
    }
    return {...finalMembersGroupedObject, ['young']: [currentMember]}
}, {})/* 
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
}) */
const divideAge:object = {young, old, noAge}
console.log(divideAge)

//7. add a new member to same members array instance at index 2
membersArray.splice(2, 1, {name:'new member', age:20});
console.log(membersArray);

//8. extract first and second element using destructing
const [first, second ]= membersArray;
console.log(first,second);

//9. Create a new array instance adding a new member at index 0, and keeping existing afterwards
const [...newMembers]: obj[] = membersArray;
newMembers.unshift({name:'newMemberAt index0', age:57})
console.log(newMembers); 

//10. Extract properties of object using destructuring
var [{name:na ,age }]: obj[] =membersArray;
console.log(na ,age);

//11. Rename extracted property of object while destructing
const [{name: name1,age:age1},{name:name2, age:age2}]: obj[]  = membersArray;
console.log(name1, age1);
console.log(name2,age2);

//12. Destructure any property of an object and use spread operator to get remaining properties in an object
//....................uncomment 9th to run this.....
var [{name:na, ...remain}]: obj[] = newMembers;
console.log(na, remain); 

//13. Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step
const [{...obj1}]: obj[] = membersArray;
console.log(obj1);
obj1.name="overridden name";
obj1.age=22;
console.log(obj1); 

//14. Use reduce function on array and object
const totalAge:number = filterArray.reduce((sum, item)=>{
    return sum + item.age;
}, 0)
console.log(totalAge);

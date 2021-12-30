
const members = [
  {name: 'Laveesh Gupta', age: 20},
  {name: 'Yash Jangid', age: 40},
  {name: 'Firoz Khan', age: 41},
  {name: 'Amrit Srivastava', age: 17},
  {name: 'Chandraprakash Sharma'},
  {name: 'Swpril Ahuja', age: 45},
  {name: 'Yogesh Khatri', age: 51}
];


//1. Get array of first names of everyone
const fNames = members.map((member)=>{
    return member.name.split(" ")[0];
}) 
console.log(fNames)
 
  


/* 
//2. Make everyone's last names in UPPERCASE in given array of objects
const lNames = members.map((member)=>{
    const last = member.name.split(" ")[1]
    return last.toUpperCase();
})
console.log(lNames) 
 
 */


/* 
//3. Get entries where age is between 41-60
const ageArr = members.filter( member=>member.age && member.age >40 && member.age<60);
console.log(ageArr);
  */

/* 
//filtered array to leave undefined values and store rest 
const filteredArray = members.filter((member)=>member.age)
console.log(filteredArray); 
 */

/* 
//4. Get average age
const avgAge = filteredArray.reduce((total, item)=>{
    return total + item.age;
}, 0)
console.log(avgAge/filteredArray.length); */



/* 
//5. Get Person with maximum age
const maxAge = Math.max( ...filteredArray.map((member)=>member.age ))
console.log(maxAge);
 */





// 6. Divide persons in three groups, result should look like
//    {
//      'young': [],
//      'old': [],
//      'noage': []
//    }
//    Less than 35yrs is young, above 35 is old 
    const young =[];
    const old = [];
    const noAge = [];
    members.forEach((member)=>{
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







/* 
//7. add a new member to same members array instance at index 2
members.splice(2, 1, {name:'new member', age:20});
console.log(members); */




/* 
//8. extract first and second element using destructing
const [first, second ]= members;
console.log(first,second); */




/*  
//9. Create a new array instance adding a new member at index 0, and keeping existing afterwards
const [...newMembers] = members; 
newMembers.unshift({name:'newMemberAt index0', age:57, address:'jaipur'})
console.log(newMembers);  
 */

/* 
//10. Extract properties of object using destructuring
const [{name,age}]=members;
console.log(name,age); */

/* 
//11. Rename extracted property of object while destructing
const [{name: name1,age:age1},{name:name2, age:age2}]= members;
console.log(name1, age1);
console.log(name2,age2); */

/* 
//12. Destructure any property of an object and use spread operator to get remaining properties in an object
//....................uncomment 9th to run this.....
const [{name, ...remaining}]= newMembers;
console.log(name, remaining); */

/* 
//13. Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step
const [{...obj1}]= members;
console.log(obj1);
obj1.name="overrided name";
obj1.age=22;
console.log(obj1); */

/* 
//14. Use reduce function on array and object
const totalAge = filteredArray.reduce((sum, item)=>{
    return sum + item.age;
}, 0)
console.log(totalAge/filteredArray.length); */












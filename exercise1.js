var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var membersArray = [
    { "name": "Laveesh Gupta", "age": 20 },
    { "name": "Yash Jangid", "age": 40 },
    { "name": "Firoz Khan", "age": 41 },
    { "name": "Amrit Srivastava", "age": 17 },
    { "name": "Chandraprakash Sharma" },
    { "name": "Swpril Ahuja", "age": 45 },
    { "name": "Yogesh Khatri", "age": 51 },
];
//1. Get array of first names of everyone
membersArray.map(function (member) {
    var splitName = member.name.split(" ");
    var memberFname = splitName[0];
    console.log(memberFname);
});
//2. Make everyone's last names in UPPERCASE in given array of objects
membersArray.map(function (member) {
    var splitName = member.name.split(" ");
    var memberLname = splitName[1].toUpperCase();
    console.log(memberLname);
});
//3. Get entries where age is between 41-60
var agesArr = membersArray.filter(function (member) { return member.age && member.age > 40 && member.age < 60; });
console.log(agesArr);
//filtered array to leave undefined values and store rest 
var filterArray = membersArray.filter(function (member) { return member.age; });
console.log(filterArray);
//4. Get average age
var avgAge = filterArray.reduce(function (total, item) {
    return total + item.age;
}, 0);
console.log(avgAge / filterArray.length);
//5. Get Person with maximum age
var maxAge = 0;
filterArray.forEach(function (member) {
    if (member.age > maxAge) {
        maxAge = member.age;
    }
});
console.log(maxAge);
// 6. Divide persons in three groups, result should look like
//    {
//      'young': [],
//      'old': [],
//      'noage': []
//    }
//    Less than 35yrs is young, above 35 is old 
var young = [];
var old = [];
var noAge = [];
membersArray.forEach(function (member) {
    if (member.age > 35) {
        old.push(member);
    }
    else if (member.age <= 35) {
        young.push(member);
    }
    else {
        noAge.push(member);
    }
});
var divideAge = { young: young, old: old, noAge: noAge };
console.log(divideAge);
//7. add a new member to same members array instance at index 2
membersArray.splice(2, 1, { name: 'new member', age: 20 });
console.log(membersArray);
//8. extract first and second element using destructing
var first = membersArray[0], second = membersArray[1];
console.log(first, second);
//9. Create a new array instance adding a new member at index 0, and keeping existing afterwards
var newMembers = membersArray;
newMembers.unshift({ name: 'newMemberAt index0', age: 57 });
console.log(newMembers);
//10. Extract properties of object using destructuring
var _a = membersArray[0], na = _a.name, age = _a.age;
console.log(na, age);
//12. Destructure any property of an object and use spread operator to get remaining properties in an object
//....................uncomment 9th to run this.....
var _b = newMembers[0], na = _b.name, remaining = __rest(_b, ["name"]);
console.log(na, remaining);
//13. Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step
var _c = membersArray[0], obj1 = __rest(_c, []);
console.log(obj1);
obj1.name = "overridden name";
obj1.age = 22;
console.log(obj1);
//14. Use reduce function on array and object
var totalAge = filterArray.reduce(function (sum, item) {
    return sum + item.age;
}, 0);
console.log(totalAge);

const findTheOldest = function(people) {
let oldestPerson = people[0];
let oldestAge;

if (oldestPerson.yearOfDeath === undefined) {
    oldestAge = new Date().getFullYear() - oldestPerson.yearOfBirth;
} else {
    oldestAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
}

for (const person of people) {
    let age;
    if (person.yearOfDeath === undefined) {
    age = new Date().getFullYear() - person.yearOfBirth;
} else {
    age = person.yearOfDeath - person.yearOfBirth;
}
if (age > oldestAge) {
 oldestAge = age;
 oldestPerson = person;
}
}
return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
